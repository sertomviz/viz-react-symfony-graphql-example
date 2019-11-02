import React from 'react';
import {GET_COMPANY} from '../constants/graphConstants';
import { useQuery } from '@apollo/react-hooks';
import CompanyUpdateForm from './CompanyUpdateForm';
import Loading from './Loading';

const CompanyEditForm = props => {

  const cId = props.id;
  if (cId === null) return null;

  const { loading, error, data } = useQuery(GET_COMPANY, {
    variables: { id: cId },
  });


  if (loading) return <Loading/>;
  if (error) return `Error! ${error.message}`;

  const {__typename, ...company} = data.company || data.updateCompany;

  return (
    <div className="mb-3">
        <CompanyUpdateForm
          company = {company}
          refreshList = {props.refreshList}
        />
    </div>
  );
};

export default CompanyEditForm;
