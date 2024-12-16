import React from 'react';
import { EDDMHeader } from '../../components/eddm/EDDMHeader';
import { EDDMFrame } from '../../components/eddm/EDDMFrame';
import { EDDMHelp } from '../../components/eddm/EDDMHelp';

const EDDM = () => {
  return (
    <div className="space-y-6">
      <EDDMHeader />
      <EDDMFrame />
      <EDDMHelp />
    </div>
  );
};

export default EDDM;