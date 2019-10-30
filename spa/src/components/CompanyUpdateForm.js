import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Loading from './Loading';
import {UPDATE_COMPANY} from '../constants/graphConstants';
import EditForm from './EditForm.js'

const CompanyUpdateForm = ({ company }) => {

  const [updateCompany, { error, loading, data }] = useMutation(UPDATE_COMPANY);

  //if (loading) return <Loading/>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="ml-3 mr-4">
      <h4>Edit Company</h4>
      <EditForm
        company = {company}
        loading = {loading}
        submitAction = {updateCompany}
      />
    </div>
  );
};

export default CompanyUpdateForm;
