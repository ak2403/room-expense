import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4'

class Table extends Component {

    returnValue = (value) => {
        return value
    }

    render() {
        let { columns, data, onRowClick, className, rowClassName } = this.props;

        /**
         * Header_DOM collects the header data of the table
         */
        let header_DOM = columns.map(col => {
            let headerStyles = {
                maxWidth: col.setWidth ? col.width : '',
                width: col.setWidth ? col.width : ''
            }

            let headerSortType = (col.sortIcon && col.sortIcon.column === col.key) ? col.sortIcon : ''
            let headerSortIcon = ''
            if (headerSortType.type === 'asc') {
                // headerSortIcon = <Icon type="sort-ascending" />
            } else if (headerSortType.type === 'desc') {
                // headerSortIcon = <Icon type="sort-descending" />
            }

            return (
                <div style={headerStyles} key={uuid()}>
                    <span onClick={col.onHeaderCell ? () => col.onHeaderCell(col) : ''}>
                        {col.title}
                        <span className="header-icon">{headerSortIcon}</span>
                    </span>
                </div>
            )
        })

        /**
         * data_DOM collects the table body of the table
         */
        let data_DOM = ''

        data_DOM = data.map((list, index) => {
            let getRowList = columns.map(col => {
                let headerStyles = {
                    maxWidth: col.setWidth ? col.width : '',
                    width: col.setWidth ? col.width : ''
                }
                let cell_render = <div style={headerStyles}>
                    {col.render ?
                        col.render(list) :
                        col.index ? <input type="checkbox" /> : this.returnValue(list[col.dataIndex])}</div>

                return cell_render
            })
            let rowStyles = {
                height: '42px',
                minHeight: '42px'
            }
            // let split_transactions = ''
            // if (list.splitTransactions.length !== 0) {
            //     console.log(list)
            // }

            return (
                <div key={uuid()} className="rui-row-cell" style={rowStyles} onClick={() => onRowClick(list)}>
                    <div className={`rui-row ${rowClassName(list)}`} onClick={() => onRowClick(list)}>{getRowList}</div>
                    {/* <div>{split_transactions}</div> */}
                </div>
            )
        })

        return (
            <div className={`rui-table ${className}`}>
                <div className="rui-header">
                    {header_DOM}
                </div>
                <div className="rui-body">
                    {data_DOM || 'No data to show'}
                </div>
            </div>
        )
    }
}

Table.propTypes = {
    defaultWidth: PropTypes.number,
    defaultRowClick: PropTypes.func,
    onRowClick: PropTypes.func,
    className: PropTypes.string,
    rowClassName: PropTypes.func,
    data: PropTypes.array
};

Table.defaultProps = {
    defaultWidth: 50,
    defaultRowClick: () => { return },
    onRowClick: () => { return },
    className: '',
    rowClassName: () => { return },
    data: []
};

export default Table;


// import React from 'react'
// import uuid from 'uuid/v4'

// const Table = (props) => {
//     let { columns, data } = props

//     // let columnDOM = columns.map(list => {
//     //     return <div key={uuid()} className="rui-table-single-header">
//     //         {list.text}
//     //     </div>
//     // })

//     // let dataDOM = data.map(list => {
//     //     let data_row = columns.map(column => {
//     //         if(column.hasOwnProperty('render')){
//     //             return column.render(list)
//     //         }
//     //         return <div>{list[column.dataIndex]}</div>
//     //     })
//     //     return <div key={uuid()} className="rui-table-row">
//     //         {data_row}
//     //     </div>
//     // })

//     return (<div className="rui-table">
//         <div className="rui-table-header">
//             {/* {columnDOM} */}
//         </div>
//         <div className="rui-table-tbody">
//             {/* {dataDOM} */}
//         </div>
//     </div>)
// }

// export default Table