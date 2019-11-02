import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {GET_COMPANIES , REMOVE_COMPANIES, GET_ALERTS} from '../constants/graphConstants';


const RemoveCompanies = ({selections, refreshList}) => {

  const [deleteCompanies, { error, loading, data }] = useMutation(REMOVE_COMPANIES, {

      /* -- this mutation's collback updates apollo cache by removing deleted items -- */
      update(cache, {data: {RemoveCompanies: {result} }}) {

        /*-- only if mutation completed with success -- */
        if (result = 'SUCCESS') {

          /* -- get companies from cache --*/
          const {companies} = cache.readQuery({ query: GET_COMPANIES });

          /*-- find and remove items -- */
          selections.forEach(id => {
            const index = companies.findIndex(elem => elem.id === id);
            if (index >= 0) {
              companies.splice(index,1);
            }
          });

          /*-- add notification -- */
          const {alerts} = cache.readQuery({ query: GET_ALERTS });
          const alert = {tag: 'success', message: 'The companies have been removed successfully.', __typename: 'Alert'}

          /*-- update cache --*/
          const data = { companies: [...companies], alerts: [alert, ...alerts], };
          cache.writeData({ data });

          refreshList();
        }
      },
    });


  /* -- handles click on the Delete button -- */
  const handleDeleteCompanies = () => {
    deleteCompanies({ variables: {Ids: selections} });
  }

  const disabledDelBtn = selections.length === 0 || loading ? "disabled" : "";
  const btnContent = loading ? <span className="spinner-border spinner-border-sm ml-3 mr-3" role="status" aria-hidden="true"></span> : "Delete";

  return (
    <div className="d-inline">
        <button className="btn btn-danger" onClick={handleDeleteCompanies} disabled={disabledDelBtn} data-dismiss="alert">
          {btnContent}
        </button>
    </div>
  );
};

export default RemoveCompanies;
