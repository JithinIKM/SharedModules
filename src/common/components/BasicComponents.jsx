import { FormLabel, ksmThemeStyles } from '@ksmartikm/ui-components';

export function FormTitle({ title, variant = 'normal' }) {
  const { colors } = ksmThemeStyles;

  const titleStyle = {
    backgroundColor: `${colors.secondary[500]}`,
    color: `${colors.white}`,
    fontSize: '18px',
    padding: ' 1px 20px',
    borderRadius: '5px'
  };

  return (
    <div className="flex items-center form-title-container">
      <div className="flex-grow border-t border-1 " />
      {variant === 'normal' ? <h2 className="form-title-container-head">{title}</h2>
        : <h2 style={titleStyle} className="form-title-container-head">{title}</h2>}
      <div className="flex-grow border-t border-1 " />
    </div>
  );
}

export const HeaderLabel = (props) => {
  return <FormLabel fontSize="md" fontWeight="bold" {...props} />;
};

export const HeaderLabelSM = (props) => {
  return <FormLabel fontSize="sm" fontWeight="bold" {...props} />;
};

export const FormWrapper = ({ children, px = true, py = true }) => {
  return (
    <div className="w-full">
      <div className={`${py && 'py-10'} ${px && 'xl:px-24 px-12'}  grid lg:grid-cols-12 gap-x-4 xl:gap-x-6 2xl:gap-x-8 gap-y-4 sm:grid-cols-12 md:grid-cols-12 base:grid-cols-12 `}>
        {children}
      </div>
    </div>
  );
};
