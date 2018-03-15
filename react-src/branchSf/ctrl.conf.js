import {
    Text, NumberInput, Calendar, Time,
    Dropdown, DropdownMulti, Org, Employee, CalculateTime, CalculateDate,
    dateInSec
} from './inputComponents'


export default {
    text: Text,   //string
    textarea: Text,  //string
    number:NumberInput,  //int double
    money:NumberInput,  //int double
    date:Calendar, //int
    time:Time,     //int
    selection:Dropdown, //string
    multi_selection:DropdownMulti, //string
    select_employee:Employee, //string
    select_org:Org, //string 逗号分隔
    mobile:Text, 
    email:Text,
    phone:Text,

    dateDiff:CalculateDate, //string  xx天
    timeDiff:CalculateTime, //string  xx天
    sum:NumberInput,
    mean:NumberInput,
    formula:Text,
    dateInSec:dateInSec
}