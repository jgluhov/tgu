import React from 'react'
import Select, { ISelectOption } from '@/components/select/Select'
import styles from './select-cell.module.scss'

interface ISelectCellProps<T> {
  value: {
    value: T,
    options: ISelectOption<T>[],
  },
}

const SelectCell = <T extends string>(props: ISelectCellProps<T>) => {
  const [selected, setSelected] = React.useState<T>(props.value.value);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleChange = React.useCallback((selectedOption: ISelectOption<T>) => {
    setSelected(selectedOption.value);
  }, []);

  React.useEffect(() => {
    setSelected(props.value.value);
  }, [props.value.value]);

  return (
    <div className={styles.selectCell}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={1}
    >
      {
        isFocused
          ? <Select
              value={selected}
              options={props.value.options}
              isSearchable={false}
              onChange={handleChange}
              placeholder={''}
            />
          : props.value.value
      }
    </div>
  );
}

export default SelectCell;
