import React from "react";

const JsonViewer = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><strong>JSON</strong> Raw</h5>
        <p className="card-subtitle text-muted">
          Raw informations from your resume.
        </p>
        <pre className="mt-3">
          <code className="javascript">
            {JSON.stringify(props.content, null, 2)}
          </code>
        </pre>
      </div>
      <div className="card-footer text-right">
        <button type="button" className="btn btn-primary btn-sm">
          Copy
        </button>
      </div>
    </div>
  );
};

export default JsonViewer;
