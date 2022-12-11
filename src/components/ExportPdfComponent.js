import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent from './TableComponent';
 
class ExportPdfComponent extends React.Component {
     
    render() {
        
        const { idExamen } = this.props;
        return (
            <div>
                <div style={{display: 'none'}}>
                    <TableComponent idExamen={idExamen} ref={(response) => (this.componentRef = response)} />
                </div>
                <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <a href='#'>Descargar PDF</a>}
                />
            </div>
        );
    }
}
 
export default ExportPdfComponent;