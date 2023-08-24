import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

import styles from './HeroSectionForm.module.css';
import calender from '../../images/svgs/calender.svg';
import map from '../../images/svgs/map.svg';
import time from '../../images/svgs/time.svg';
import durationIcon from '../../images/svgs/clock-time.svg';
import GenericButton from '../genericButton';
import api from '@/services/api';

const HeroSectionForm = () => {
  const [autocompleteWhere, setAutocompleteWhere]: any = useState("");
  const [autocompleteFrom1, setAutocompleteFrom1]: any = useState("");
  const [autocompleteFrom2, setAutocompleteFrom2]: any = useState("");
  const fromatedFrom: any = useRef(null);
  const fromatedWhere: any = useRef(null);
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('one_way');
  const [whereAddress, setWhereAddress] = useState({ lat: 0, lng: 0 });
  const [fromAddress, setFromAddress] = useState({ lat: 0, lng: 0 });
  const date = new Date();
  date.setHours(date.getHours() + 24);

  const bounds = {
    north: 60.854049,
    south: 49.823809,
    east: 1.76334,
    west: -8.649987,
  };

  const getDistanceFromLatLonInKm = async (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    try {
      const response = await api.post('booking/getDistance', {
        lat1,
        lon1,
        lat2,
        lon2,
      });
      return response.data.toFixed(2);
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const formik = useFormik({
    initialValues: {
      from: '',
      where: '',
      date: date.toISOString().split('T')[0],
      time: new Date()
        .toLocaleTimeString('en-US', { hour12: false })
        .slice(0, 5),
      hours: new Date().getHours(),
      minutes: Math.round(new Date().getMinutes() / 5) * 5,
      hrs: '',
    },
    onSubmit: async (data) => {
      console.log('data', data);

      const distance: number =
        selectedTab === 'by_hour'
          ? 0
          : await getDistanceFromLatLonInKm(
            whereAddress.lat,
            whereAddress.lng,
            fromAddress.lat,
            fromAddress.lng
          );
      if (selectedTab === 'one_way') {
        if ((!fromAddress.lat && !fromAddress.lng && !whereAddress.lat && !whereAddress.lng) ||
          (!fromAddress.lat && !fromAddress.lng || !whereAddress.lat && !whereAddress.lng)) {
          alert("Unable to find the start address, please make sure to select from drop-down");
        }
        else {
          router.push(
            {
              pathname: '/select-car',
              query: {
                ...data,
                from: fromatedFrom?.current?.value,
                where: fromatedWhere?.current?.value,
                selectedTab,
                time: `${data.hours}:${data.minutes}`,
                distance,
              },
            },
            undefined,
            { shallow: true }
          );
        }
      } else {
        if (!fromAddress.lat && !fromAddress.lng) {
          alert("Unable to find the start address, please make sure to select from drop-down");
        }
        else {
          setTimeout(() => { })
          router.push(
            {
              pathname: '/select-car',
              query: {
                ...data,
                from: fromatedFrom?.current?.value,
                selectedTab,
                time: `${data.hours}:${data.minutes}`,
                distance,
              },
            },
            undefined,
            { shallow: true }
          );
        }
      }
    },
    validationSchema:
      selectedTab === 'one_way'
        ? Yup.object({
          from: Yup.string().required('Starting location is required'),
          date: Yup.string().required('Date is required'),
          where: Yup.string().required('Where to is required'),
        })
        : Yup.object({
          from: Yup.string().required('Starting location is required'),
          date: Yup.string().required('Date is required'),
          hrs: Yup.string().required('Duration is required'),
        }),
  });

  const isminutesOptionDisabled = (minutes: number) => {
    const isDateEqual =
      new Date(formik.values.date).getTime() ===
      new Date(date.toISOString().split('T')[0]).getTime();
    const isTimeGreater = new Date().getHours() === Number(formik.values.hours);
    return (
      isDateEqual && isTimeGreater && Number(formik.values.minutes) > minutes
    );
  };

  const isHoursOptionDisable = (hours: number) => {
    const isDateEqual =
      new Date(formik.values.date).getTime() ===
      new Date(date.toISOString().split('T')[0]).getTime();
    return isDateEqual && new Date().getHours() > hours;
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDHZJM-B93BbvAA4Pmo9JidQnXd3wvXBOY',
    libraries: ['drawing', 'places'],
    // region: 'UK',
  });

  const handleWherePlaceChanged = () => {
    const place = autocompleteWhere.getPlace() || "";
    if (place) {
      formik.setFieldValue('where', place.name);
      setWhereAddress((prev) => ({
        ...prev,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }));
    }
  };

  const handleFromPlaceChanged1 = () => {
    const place = autocompleteFrom1?.getPlace() || "";
    if (place) {
      formik.setFieldValue('from', place.name);

      setFromAddress((prev) => ({
        ...prev,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }));
    }
  };

  const handleFromPlaceChanged2 = () => {
    const place = autocompleteFrom2.getPlace() || "";
    if (place) {
      formik.setFieldValue('from', place.name);
      setFromAddress((prev) => ({
        ...prev,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }));
    }
  };

  return (
    <div className={styles.container}>
      <ul
        className={`${styles.tabsWrapper} nav nav-pills mb-3 d-flex justify-content-center`}
        id='pills-tab'
        role='tablist'
      >
        <li
          className='nav-item'
          role='presentation'
          onClick={() => {
            setSelectedTab('one_way');
            formik.resetForm();
          }}
        >
          <button
            className={`${selectedTab === 'one_way'
              ? styles.activeTabsButton
              : styles.inActiveTabsButton
              } nav-link ${selectedTab === 'one_way' ? 'active' : ''}`}
            id='pills-home-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-home'
            type='button'
            role='tab'
            aria-controls='pills-home'
            aria-selected='true'
          >
            One way
          </button>
        </li>
        <li
          className='nav-item'
          role='presentation'
          onClick={() => {
            setSelectedTab('by_hour');
            formik.resetForm();
          }}
        >
          <button
            className={`${selectedTab === 'by_hour'
              ? styles.activeTabsButton
              : styles.inActiveTabsButton
              } nav-link `}
            id='pills-profile-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-profile'
            type='button'
            role='tab'
            aria-controls='pills-profile'
            aria-selected='false'
          >
            By the hour
          </button>
        </li>
      </ul>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className={`tab-pane fade show ${selectedTab === 'one_way' ? 'active' : ''
            }`}
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        >
          <div className={styles.formWrapper}>
            <div>
              {isLoaded && (
                <>
                  <div className={styles.formInputCon}>
                    <Autocomplete
                      onLoad={(autocomplete) => {
                        setAutocompleteFrom1(autocomplete);
                      }}
                      onPlaceChanged={handleFromPlaceChanged1}
                      options={{
                        bounds: bounds,
                        componentRestrictions: { country: "uk" },
                      }}
                    >
                      <input
                        className={styles.formInput}
                        placeholder='Address, Airport, Hotel, ...'
                        name='from'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        ref={fromatedFrom}
                      />
                    </Autocomplete>
                    {formik.touched.from && formik.errors.from && (
                      <span className={styles.errorMessage}>
                        {formik.errors.from}
                      </span>
                    )}
                    <div className={styles.formInputText}>Where From?</div>
                    <div className={styles.formImagesCon}>
                      <Image
                        src={map}
                        alt='img'
                        className={styles.formImages}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              {isLoaded && (
                <>
                  <div className={styles.formInputCon}>
                    <Autocomplete
                      onLoad={(autocomplete) => {
                        setAutocompleteWhere(autocomplete);
                      }}
                      onPlaceChanged={handleWherePlaceChanged}
                      options={{
                        bounds: bounds,
                        componentRestrictions: { country: "uk" },
                      }}
                    >
                      <input
                        className={styles.formInput}
                        name='where'
                        placeholder='Address, Airport, Hotel, ...'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        ref={fromatedWhere}
                      />
                    </Autocomplete>
                    {formik.touched.where && formik.errors.where && (
                      <span className={styles.errorMessage}>
                        {formik.errors.where}
                      </span>
                    )}
                    <div className={styles.formInputText}>Where To?</div>
                    <div className={styles.formImagesCon}>
                      <Image
                        src={map}
                        alt='img'
                        className={styles.formImages}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className={styles.customInputDate}>
              <div className={styles.calenderCon}>
                <DatePicker
                  dateFormat='dd/MM/yyyy'
                  selected={new Date(formik.values.date)}
                  minDate={date}
                  onChange={(date: any) => {
                    formik.setFieldValue(
                      'date',
                      date.toISOString().split('T')[0]
                    );
                  }}
                />
              </div>
              {formik.touched.date && formik.errors.date && (
                <span className={styles.errorMessage}>
                  {formik.errors.date}
                </span>
              )}
              <div className={styles.formInputText}>Date:</div>
              <div className={styles.formImagesCon}>
                <Image src={calender} alt='img' className={styles.formImages} />
              </div>
            </div>
            <div className={styles.customInputTime}>
              <div className={styles.timePicker}>
                <select
                  className={styles.hour}
                  onChange={formik.handleChange}
                  onFocus={formik.handleBlur}
                  name='hours'
                  value={formik.values.hours}
                >
                  <option disabled={isHoursOptionDisable(0)} value='00'>
                    00
                  </option>
                  <option disabled={isHoursOptionDisable(1)} value='01'>
                    01
                  </option>
                  <option disabled={isHoursOptionDisable(2)} value='02'>
                    02
                  </option>
                  <option disabled={isHoursOptionDisable(3)} value='03'>
                    03
                  </option>
                  <option disabled={isHoursOptionDisable(4)} value='04'>
                    04
                  </option>
                  <option disabled={isHoursOptionDisable(5)} value='05'>
                    05
                  </option>
                  <option disabled={isHoursOptionDisable(6)} value='06'>
                    06
                  </option>
                  <option disabled={isHoursOptionDisable(7)} value='07'>
                    07
                  </option>
                  <option disabled={isHoursOptionDisable(8)} value='08'>
                    08
                  </option>
                  <option disabled={isHoursOptionDisable(9)} value='09'>
                    09
                  </option>
                  <option disabled={isHoursOptionDisable(10)} value='10'>
                    10
                  </option>
                  <option disabled={isHoursOptionDisable(11)} value='11'>
                    11
                  </option>
                  <option disabled={isHoursOptionDisable(12)} value='12'>
                    12
                  </option>
                  <option disabled={isHoursOptionDisable(13)} value='13'>
                    13
                  </option>
                  <option disabled={isHoursOptionDisable(14)} value='14'>
                    14
                  </option>
                  <option disabled={isHoursOptionDisable(15)} value='15'>
                    15
                  </option>
                  <option disabled={isHoursOptionDisable(16)} value='16'>
                    16
                  </option>
                  <option disabled={isHoursOptionDisable(17)} value='17'>
                    17
                  </option>
                  <option disabled={isHoursOptionDisable(18)} value='18'>
                    18
                  </option>
                  <option disabled={isHoursOptionDisable(19)} value='19'>
                    19
                  </option>
                  <option disabled={isHoursOptionDisable(20)} value='20'>
                    20
                  </option>
                  <option disabled={isHoursOptionDisable(21)} value='21'>
                    21
                  </option>
                  <option disabled={isHoursOptionDisable(22)} value='22'>
                    22
                  </option>
                  <option disabled={isHoursOptionDisable(23)} value='23'>
                    23
                  </option>
                </select>
                <span>:</span>
                <select
                  className={styles.minute}
                  onChange={formik.handleChange}
                  onFocus={formik.handleBlur}
                  name='minutes'
                  value={formik.values.minutes}
                >
                  <option disabled={isminutesOptionDisabled(0)} value='00'>
                    00
                  </option>
                  <option disabled={isminutesOptionDisabled(5)} value='05'>
                    05
                  </option>
                  <option disabled={isminutesOptionDisabled(10)} value='10'>
                    10
                  </option>
                  <option disabled={isminutesOptionDisabled(15)} value='15'>
                    15
                  </option>
                  <option disabled={isminutesOptionDisabled(20)} value='20'>
                    20
                  </option>
                  <option disabled={isminutesOptionDisabled(25)} value='25'>
                    25
                  </option>
                  <option disabled={isminutesOptionDisabled(30)} value='30'>
                    30
                  </option>
                  <option disabled={isminutesOptionDisabled(35)} value='35'>
                    35
                  </option>
                  <option disabled={isminutesOptionDisabled(40)} value='40'>
                    40
                  </option>
                  <option disabled={isminutesOptionDisabled(45)} value='45'>
                    45
                  </option>
                  <option disabled={isminutesOptionDisabled(50)} value='50'>
                    50
                  </option>
                  <option disabled={isminutesOptionDisabled(55)} value='55'>
                    55
                  </option>
                </select>
              </div>
              {formik.touched.time && formik.errors.time && (
                <span className={styles.errorMessage}>
                  {formik.errors.time}
                </span>
              )}
              <div className={styles.formInputText}>Time:</div>
              <div className={styles.formImagesCon}>
                <Image src={time} alt='img' className={styles.formImages} />
              </div>
            </div>
            <GenericButton title='Get a Quote' onClick={formik.handleSubmit} />
          </div>
        </div>

        <div
          className={`tab-pane fade ${selectedTab === 'one_way' ? '' : 'active'
            }`}
          id='pills-profile'
          role='tabpanel'
          aria-labelledby='pills-profile-tab'
        >
          <div className={styles.formWrapper}>
            <div>
              {isLoaded && (
                <>
                  <div className={styles.formInputCon}>
                    <Autocomplete
                      onLoad={(autocomplete) => {
                        setAutocompleteFrom2(autocomplete);
                      }}
                      onPlaceChanged={handleFromPlaceChanged2}
                      options={{
                        bounds: bounds,
                        componentRestrictions: { country: "uk" },
                      }}
                    >
                      <input
                        className={styles.formInput}
                        placeholder='Address, Airport, Hotel, ...'
                        name='from'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </Autocomplete>
                    {formik.touched.from && formik.errors.from && (
                      <span className={styles.errorMessage}>
                        {formik.errors.from}
                      </span>
                    )}
                    <div className={styles.formInputText}>Where From?</div>
                    <div className={styles.formImagesCon}>
                      <Image
                        src={map}
                        alt='img'
                        className={styles.formImages}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className={styles.formInputCon}>
                <select
                  className={styles.select}
                  name='hrs'
                  onChange={formik.handleChange}
                  onFocus={formik.handleBlur}
                  value={formik.values.hrs}
                >
                  <option value='' disabled selected>
                    How Long?
                  </option>
                  <option value={4}>4 hours</option>
                  <option value={5}>5 hours</option>
                  <option value={6}>6 hours</option>
                  <option value={7}>7 hours</option>
                  <option value={8}>8 hours</option>
                  <option value={9}>9 hours</option>
                  <option value={10}>10 hours</option>
                  <option value={11}>11 hours</option>
                  <option value={12}>12 hours</option>
                  <option value={13}>13 hours</option>
                  <option value={14}>14 hours</option>
                  <option value={15}>15 hours</option>
                  <option value={16}>16 hours</option>
                </select>
                {formik.touched.hrs && formik.errors.hrs && (
                  <span className={styles.errorMessage}>
                    {formik.errors.hrs}
                  </span>
                )}
                <div className={styles.formInputText}>Duration:</div>
                <div className={styles.formImagesCon}>
                  <Image
                    src={durationIcon}
                    alt='img'
                    className={styles.formImages}
                  />
                </div>
              </div>
            </div>
            <div className={styles.customInputDate}>
              <div className={styles.calenderCon}>
                <DatePicker
                  dateFormat='dd/MM/yyyy'
                  selected={new Date(formik.values.date)}
                  minDate={date}
                  onChange={(date: any) => formik.setFieldValue('date', date)}
                />
              </div>
              {formik.touched.date && formik.errors.date && (
                <span className={styles.errorMessage}>
                  {formik.errors.date}
                </span>
              )}
              <div className={styles.formInputText}>Date:</div>
              <div className={styles.formImagesCon}>
                <Image src={calender} alt='img' className={styles.formImages} />
              </div>
            </div>
            <div className={styles.customInputDate}>
              <div className={styles.timePicker}>
                <select
                  className={styles.hour}
                  onChange={formik.handleChange}
                  onFocus={formik.handleBlur}
                  name='hours'
                  value={formik.values.hours}
                >
                  <option disabled={isHoursOptionDisable(0)} value='00'>
                    00
                  </option>
                  <option disabled={isHoursOptionDisable(1)} value='01'>
                    01
                  </option>
                  <option disabled={isHoursOptionDisable(2)} value='02'>
                    02
                  </option>
                  <option disabled={isHoursOptionDisable(3)} value='03'>
                    03
                  </option>
                  <option disabled={isHoursOptionDisable(4)} value='04'>
                    04
                  </option>
                  <option disabled={isHoursOptionDisable(5)} value='05'>
                    05
                  </option>
                  <option disabled={isHoursOptionDisable(6)} value='06'>
                    06
                  </option>
                  <option disabled={isHoursOptionDisable(7)} value='07'>
                    07
                  </option>
                  <option disabled={isHoursOptionDisable(8)} value='08'>
                    08
                  </option>
                  <option disabled={isHoursOptionDisable(9)} value='09'>
                    09
                  </option>
                  <option disabled={isHoursOptionDisable(10)} value='10'>
                    10
                  </option>
                  <option disabled={isHoursOptionDisable(11)} value='11'>
                    11
                  </option>
                  <option disabled={isHoursOptionDisable(12)} value='12'>
                    12
                  </option>
                  <option disabled={isHoursOptionDisable(13)} value='13'>
                    13
                  </option>
                  <option disabled={isHoursOptionDisable(14)} value='14'>
                    14
                  </option>
                  <option disabled={isHoursOptionDisable(15)} value='15'>
                    15
                  </option>
                  <option disabled={isHoursOptionDisable(16)} value='16'>
                    16
                  </option>
                  <option disabled={isHoursOptionDisable(17)} value='17'>
                    17
                  </option>
                  <option disabled={isHoursOptionDisable(18)} value='18'>
                    18
                  </option>
                  <option disabled={isHoursOptionDisable(19)} value='19'>
                    19
                  </option>
                  <option disabled={isHoursOptionDisable(20)} value='20'>
                    20
                  </option>
                  <option disabled={isHoursOptionDisable(21)} value='21'>
                    21
                  </option>
                  <option disabled={isHoursOptionDisable(22)} value='22'>
                    22
                  </option>
                  <option disabled={isHoursOptionDisable(23)} value='23'>
                    23
                  </option>
                </select>
                <span>:</span>
                <select
                  className={styles.minute}
                  onChange={formik.handleChange}
                  onFocus={formik.handleBlur}
                  name='minutes'
                  value={formik.values.minutes}
                >
                  <option disabled={isminutesOptionDisabled(0)} value='00'>
                    00
                  </option>
                  <option disabled={isminutesOptionDisabled(5)} value='05'>
                    05
                  </option>
                  <option disabled={isminutesOptionDisabled(10)} value='10'>
                    10
                  </option>
                  <option disabled={isminutesOptionDisabled(15)} value='15'>
                    15
                  </option>
                  <option disabled={isminutesOptionDisabled(20)} value='20'>
                    20
                  </option>
                  <option disabled={isminutesOptionDisabled(25)} value='25'>
                    25
                  </option>
                  <option disabled={isminutesOptionDisabled(30)} value='30'>
                    30
                  </option>
                  <option disabled={isminutesOptionDisabled(35)} value='35'>
                    35
                  </option>
                  <option disabled={isminutesOptionDisabled(40)} value='40'>
                    40
                  </option>
                  <option disabled={isminutesOptionDisabled(45)} value='45'>
                    45
                  </option>
                  <option disabled={isminutesOptionDisabled(50)} value='50'>
                    50
                  </option>
                  <option disabled={isminutesOptionDisabled(55)} value='55'>
                    55
                  </option>
                </select>
              </div>
              <div className={styles.formInputText}>Time:</div>
              <div className={styles.formImagesCon}>
                <Image src={time} alt='img' className={styles.formImages} />
              </div>
            </div>
            <GenericButton title='Get a Quote' onClick={formik.handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionForm;
