import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { CountryList } from './CountryList';
import { CountryForm } from './CountryForm';
import * as API from './getCountry';

const DEBOUNCE_DELAY = 300;
const tempList = ['aaaa', 'sssss', 'ddddd'];

const FetchingCountry = () => {
  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, DEBOUNCE_DELAY);
  API.getCountry('Ukraine').then(result=>console.log(result.data));

  return (
    <>
      <CountryForm setText={setQuery}/>
      <CountryList countries={tempList} />
    </>
  );
};

export default FetchingCountry;
