export const CountryForm = ({setText}) => {
  return (
    <>
      <input
        defaultValue={''}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </>
  );
};
