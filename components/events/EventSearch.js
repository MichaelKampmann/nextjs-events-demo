import Button from '../UI/Button';
import classes from './EventSearch.module.css';

function EventSearch(props) {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div classes={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div classes={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            <option value="1">Januar</option>
            <option value="2">Februar</option>
            <option value="3">Marts</option>
            <option value="4">April</option>
            <option value="5">Maj</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
}

export default EventSearch;
