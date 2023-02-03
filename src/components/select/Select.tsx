import ReactSelect  from 'react-select';
import React from 'react';

import styles from './select.module.scss';

export interface ISelectOption<T> {
  value: T,
  label: string;
}

interface ISelectProps<T> {
  value: T;
  options: ISelectOption<T>[];
  onChange(value: ISelectOption<T>): void;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  placeholder?: string;
}

const Select = <T extends any>(props: ISelectProps<T>) => {
  const [value, setValue] = React.useState<ISelectOption<T>>(null);

  React.useEffect(() => {
    setValue(props.options.find(option => option.value === props.value));
  }, [props.value, props.options]);

  return (
    <ReactSelect
      classNames={{
        container: () => styles.container,
        indicatorSeparator: () => styles.indicatorSeparator,
        control: () => styles.control,
        dropdownIndicator: () => styles.dropdownIndicator,
        singleValue: () => styles.singleValue,
        menu: () => styles.menu,
        menuList: () => styles.menuList
      }}
      isSearchable={props.isSearchable}
      isDisabled={props.isDisabled}
      isClearable={props.isClearable}
      options={props.options}
      value={value}
      placeholder={props.placeholder}
      onChange={props.onChange} />
    )
}

export default Select;
