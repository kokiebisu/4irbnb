export const notice = 0;
export const checkinFrom = "";
export const checkinTo = "";
export const handleNoticeSameDayChange = () =>
  alert("Handle notice same day change");
export const handleNoticeDayChange = (day: string) =>
  alert(`Handle notice day change to ${day}`);
export const handleSelectChange = (e: any, type: string) =>
  alert(`Handle ${type} select change to ${e.target.value}`);
