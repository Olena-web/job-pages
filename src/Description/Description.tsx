export const Description = (data: string) => {
    const formattedDescription = data.split(`\n`).map((item, index) => {
        return <p key={index}>{item}</p>;
        });

  return (
    <div>
      {formattedDescription}
    </div>
  );
};