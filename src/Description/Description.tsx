import { fontStyle } from "@mui/system";

export const Description = (data: string) => {
    const formattedDescription = data.split(`\n`).map((item, index) => {
      if(item.includes(':'))
       {
        console.log(item);    
        return (
          <div key={index}>
            <h4 className='description-title' style = {{ fontWeight: 'bold'}}>{item}</h4>
          </div>
        );
      }
      else {
        return (
          <div key={index}>
            <p className='description-text'>{item}</p>
          </div>
        );
      }
    });

       

  return (
    <div>
      {formattedDescription}
    </div>
  );
};