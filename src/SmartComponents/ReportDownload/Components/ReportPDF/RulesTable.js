import React from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line rulesdir/disallow-fec-relative-imports
import { Table } from '@redhat-cloud-services/frontend-components-pdf-generator';

const identifierLabel = ({ identifier }) =>
  JSON.parse(identifier || '{}').label || '';

const capitalize = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);

const RulesTable = ({ rules }) => {
  const headerRow = ['Rule name', 'ID', 'Severity', 'Failed systems'];
  const failedRuleRows = rules.map((rule) => [
    rule.title,
    identifierLabel(rule),
    // TODO: Add icon svg for severity
    capitalize(rule?.severity),
    `${rule.systemsCount}`,
  ]);

  return <Table withHeader rows={[headerRow, ...failedRuleRows]} />;
};

RulesTable.propTypes = {
  rules: propTypes.array,
};

export default RulesTable;
