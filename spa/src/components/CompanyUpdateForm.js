import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Loading from './Loading';
import {UPDATE_COMPANY, GET_ALERTS} from '../constants/graphConstants';
import EditForm from './EditForm.js'

const CompanyUpdateForm = ({ company, refreshList }) => {

  const [updateCompany, { error, loading, data }] = useMutation(UPDATE_COMPANY, {

      update(cache, {data: {UpdatedCompany}}) {
        const {alerts} = cache.readQuery({ query: GET_ALERTS });
        const alert = {tag: 'success', message: 'The company has been updated successfully.', __typename: 'Alert'}
        const data = {
          alerts: [alert, ...alerts],
        };
        cache.writeData({ data });
        refreshList();
      },
    });

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
