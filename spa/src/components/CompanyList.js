import React, { useState } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import CompanyEditForm from './CompanyEditForm';
import CompanyNewForm from './CompanyNewForm';
import Loading from './Loading';
import RemoveCompanies from './RemoveCompanies';
import Alerts from './Alerts';
import {GET_COMPANIES} from '../constants/graphConstants';


const CompanyRow = props => {
  const { id, name, website, country } = props.company;

  const rowClass = props.isSelected ? 'rowSelected' : null;

  const handleClick = () => {
    props.actionClick(id);
  };

  const handleSelectCompany = () => {
    props.actionSelectCompany(id);
  }

  return (
      <tr key={id} className={rowClass}>
        <td width="5%"><input type="checkbox" onChange={handleSelectCompany} checked={props.isSelected}/></td>
        <td width="35%"><a href='#' onClick={handleClick}>{name}</a></td>
        <td width="20%">{country}</td>
        <td width="40%">{website}</td>
      </tr>
  );
};

export default function CompanyList() {

  const [item, setItem] = useState({active: null, new: false});
  const [selections, setSelections] = useState([]);
  const [orderBy, setOrderBy] = useState({name: false, country: false, website: false});
  const client = useApolloClient();

  /* -- handles click on the Company Name link -- */
  const handleClick = (id) => {
    setItem({active: id, new: false});
  }

  /* -- handles click on the Create button -- */
  const handleNewCompany = () => {
    setItem({active: null, new: true});
  }

  /* -- handles action after adding, updating or deleting items -- */
  const handleRefreshList = () => {
    setItem({active: null, new: false});
    setSelections([]);
  }

  /* -- handles click on select all checkbox -- */
  const handleSelectAll = (e) => {
    e.currentTarget.checked ? setSelections([...data.companies.map(({id}) => id)]) : setSelections([])
  }

  /* -- handles click on select company checkbox -- */
  const handleSelectCompany = (id) => {
    selections.includes(id) ? setSelections([...selections].filter(v => v !== id)) : setSelections([...selections, id])
  }

  /* -- handles click on the table header column to sort data in table -- */
  const handleSortTable = (event) => {
    const field = event.currentTarget.getAttribute('name');
    const {companies} = client.readQuery({ query: GET_COMPANIES });
    const order = !orderBy[field] ? true : false;
    companies.sort(sort_by(field, order, (a) =>  a.toUpperCase()));
    setOrderBy({...orderBy, [field]: order});
  }

  /* -- sorts array based on field and reverse order -- */
  const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  /*-- get data from server or from cache --*/
  const { loading, error, data } = useQuery(GET_COMPANIES);

  if (loading) return <Loading/>;
  if (error) return `Error! ${error.message}`;

  const CompanyForm = item.new ? <CompanyNewForm refreshList = {handleRefreshList}/> : item.active ? <CompanyEditForm id = {item.active} refreshList = {handleRefreshList} /> : <span>Click on the name to edit Company or hit Create button to add new one</span>

  return (
    <div className="row">
      <div className="fixed-top w-50 mt-4 mr-4 ml-auto">
        <Alerts />
      </div>
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="mb-2">
          <RemoveCompanies
            selections = {selections}
            refreshList = {handleRefreshList}
           />
          <input type="button" className="btn btn-primary ml-2" onClick={handleNewCompany} value="Create" />
        </div>
        <table className="table table-fixed">
        <thead className="thead-dark">
          <tr>
            <th width="5%"><input type="checkbox" onChange={handleSelectAll} /></th>
            <th width="35%" name="name" onClick={handleSortTable}>Company Name</th>
            <th width="20%" name="country" onClick={handleSortTable}>Country</th>
            <th width="40%" name="website"onClick={handleSortTable}>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.companies.map(item => (
                <CompanyRow
                  key = {item.id}
                  company = {item}
                  actionClick = {handleClick}
                  actionSelectCompany = {handleSelectCompany}
                  isSelected = {selections.includes(item.id)}
                 />
          ))}
        </tbody>
        </table>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
        {CompanyForm}
      </div>
    </div>
  )
}
