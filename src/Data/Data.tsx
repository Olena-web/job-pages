export const Data = (createdData: string, updatedData: string) => {
    const one_day=1000*60*60*24;
    const d1 = new Date(createdData).getTime();
    const d2 = new Date(updatedData).getTime();
    const diff = Math.ceil((d2-d1)/(one_day));
    if (diff === 0) {
       return (<div>Posted today</div>);
    } else if (diff === 1) {
        return (<div>Posted yesterday</div>);
    } else {
        return (<div>Posted {diff} days ago</div>);
    }
};
