import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {GET_COMPANIES, CREATE_COMPANY} from '../constants/graphConstants';
import EditForm from './EditForm.js'


const NewForm = (props) => {


  const [createCompany, { error, loading, data }] = useMutation(CREATE_COMPANY, {

      update(cache, {data: {CreateCompany}}) {

        const {companies} = cache.readQuery({ query: GET_COMPANIES });
        const data = {
          companies: [CreateCompany, ...companies],
        };
        cache.writeData({ data });
        props.refreshList();
      },
    });


  return (
    <div className="ml-3 mr-4">
      <h4>New Company</h4>
      <EditForm
        company = {{name: '', country: '', website: ''}}
        loading = {loading}
        submitAction = {createCompany}
      />
    </div>
  );
};

export default NewForm;
