import React from 'react';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Form({ onChange }: Props) {

  return <>
    <form className="container-fluid">
      <div className="row">
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="url">URL</label>
      <input type="text" className="form-control" onChange={onChange} name="url" placeholder="URL" />
    </div>
    <div className="form-group col-md-6 col-sm-12">
      <label htmlFor="width">Width (px)</label>
      <input type="text" className="form-control" onChange={onChange} name="width" placeholder="Width (px)" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="borderWidth">Border Width (px)</label>
    <input type="text" className="form-control" onChange={onChange} name="borderWidth" placeholder="Border Width (px)" />
  </div>
  <div className="form-group">
    <label htmlFor="borderColor">Border Color</label>
    <input type="color" className="form-control" onChange={onChange} name="borderColor" value="#007bff" placeholder="Border Color" />
  </div>
  <button type="submit" className="btn btn-primary m-2">RESET</button>
</form>
    </>;
}