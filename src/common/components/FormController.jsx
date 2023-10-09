import {
  Checkbox, ErrorText, Select, TextInput,
  DatePickerComponent, FileUpload, TextArea, RadioButton, ToggleSwitch
} from 'common/components';
import { Controller } from 'react-hook-form';
import _ from 'lodash';

const FormController = (props) => {
  const {
    type, name, control, label, errors, optionKey = 'code', data, register, handleChange
  } = props;
  const error = _.get(errors, `${name}.message`, null);

  switch (type) {
    case 'time':
    case 'date':
    case 'datetime':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePickerComponent
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );
    case 'check':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <Checkbox
                {...field}
                {...props}
                onChange={(e) => {
                  field.onChange(e);
                  props?.handleChange?.(e);
                }}
                isChecked={field?.value || false}
              >{label}
              </Checkbox>
              {error && <ErrorText error={error} />}
            </>
          )}
        />
      );
    case 'select':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e ? e[optionKey] : e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );
    case 'toggle':
      return (
        <>
          <ToggleSwitch
            data={data}
            name={name}
            register={register}
            {...{ error }}
            handleChange={handleChange}
          />
          {error && <ErrorText error={error} />}
        </>
      );
    case 'file':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <FileUpload
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );
    case 'radio':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioButton
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );

    case 'textarea':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );

    default:
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              {...props}
              {...{ error }}
              onChange={(e) => {
                field.onChange(e);
                props?.handleChange?.(e);
              }}
            />
          )}
        />
      );
  }
};

export default FormController;
