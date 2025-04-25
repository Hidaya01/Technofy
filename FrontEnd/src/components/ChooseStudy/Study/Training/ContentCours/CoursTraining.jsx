import React from 'react';
import { useParams } from 'react-router-dom';

import HtmlTrainingCour from './HtmlTrainingCour';
import ReactTrainingCour from './JsTrainingCour';
import PythonTrainingCour from './PythonTrainingCour';
import JsTrainingCour from './JsTrainingCour';

function CoursTraining() {
  const { training } = useParams();

  const getTrainingComponent = () => {
    switch (training.toLowerCase()) {
      case 'html':
        return <HtmlTrainingCour />;
      case 'javascript':
        return <JsTrainingCour />;
      case 'python':
        return <PythonTrainingCour />;
      default:
        return <div>Training not found for: {training}</div>;
    }
  };

  return (
    <div>
      {getTrainingComponent()}
    </div>
  );
}

export default CoursTraining;
