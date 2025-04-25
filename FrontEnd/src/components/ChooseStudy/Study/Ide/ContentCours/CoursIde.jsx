import React from 'react';
import { useParams } from 'react-router-dom';

import VisualStudioCour from './VisualStudioCour';
import VsCodeCour from './VsCodeCour';
import PyCharmCour from './PyCharmCour';

function CoursIde() {
  const { ideName } = useParams();

  const getCourseComponent = () => {
    switch (ideName) {
      case 'vscode':
        return <VsCodeCour />;
      case 'visualstudio':
        return <VisualStudioCour />;
      case 'pycharm':
        return <PyCharmCour />;
      default:
        return <div>Course not found for: {ideName}</div>;
    }
  };

  return (
    <div>
      {getCourseComponent()}
    </div>
  );
}

export default CoursIde;
