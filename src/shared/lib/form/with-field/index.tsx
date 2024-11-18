import { FieldDescriptor, useField } from '@filledout/react';
import { ComponentType } from 'react';

type FieldWrappedComponentProps = {
  value?: string | number;
  error?: string;
  onChange?: (...args: any[]) => void;
};

type UseFieldPropsParams<V = any, T = any> = {
  field: FieldDescriptor<V, T>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
function useFieldProps<T extends FieldDescriptor<any, any>>(_field: T) {
  const field = useField(_field);

  const {
    value,
    errors,
    onChange
  } = field;

  const error = errors?.[0];

  return {
    value,
    error: error ? error.name : undefined,
    onValue: (value: string) => onChange(value)
  };
}

export function withField<P extends FieldWrappedComponentProps>(
  Component: ComponentType<P>
) {
  return (({ field, ...props }: P & UseFieldPropsParams) => {
    const _props = useFieldProps(field);

    return <Component {...props} {...(_props as any)} />;
  }) as ComponentType<
    Omit<P, 'value' | 'onChange' | 'error' | 'hasError'> & UseFieldPropsParams
  >;
}


