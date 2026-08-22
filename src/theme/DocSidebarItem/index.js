import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import {useCountry} from '../hooks/useCountry';

export default function DocSidebarItemWrapper(props) {
  const country = useCountry();
  const {item} = props;

  // If item has countries customProp, filter by selected country
  const countries = item.customProps?.countries;
  if (countries && Array.isArray(countries) && !countries.includes(country)) {
    return null;
  }

  // For categories, check if all children would be filtered out
  if (item.type === 'category' && item.items) {
    const hasVisibleChild = item.items.some((child) => {
      const childCountries = child.customProps?.countries;
      return !childCountries || !Array.isArray(childCountries) || childCountries.includes(country);
    });
    if (!hasVisibleChild) {
      return null;
    }
  }

  return <DocSidebarItem {...props} />;
}
