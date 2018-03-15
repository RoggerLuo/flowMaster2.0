import React,{createClass} from 'react';
import EntryGroup from './EntryGroup'

// export default function(){
    // const ReactViewComp =  
    export default ({ mode,addEntry, dataSource, chooseSource, textareaOnInput, sql, checked, checkChange, chooseDropdown }) => {
        
        const delModeOpen = () => {
            rdx.dispatch({type:'sql/delMode',mode:true})
        }
        const delModeClose = () => {
            rdx.dispatch({type:'sql/delMode',mode:false})
        }
        const Dropdown = fm.common.Dropdown
        return (
            <div style={{width:'701px',height:'350px'}}>
            <div className="popupButtonScrollLayer" style={{padding:'10px 50px',position:'absolute',width:'701px',height:'350px'}}>
                <div className="customRoleTitle">
                    获取的最终数值必须为人员ID或ID集合
                </div>
                <textarea onChange={textareaOnInput} value={sql} className="sqlTextarea" placeholder="点击编写SQL语句">
                </textarea>
                <div className="customRoleTitle">添加外部系统数据源</div>
                <div className="customRoleTitle">
                    数据源名称：
                    <Dropdown width={'160px'} choosedOption={dataSource} data={window.dataSources} choosed={chooseSource}/>
                </div>
                <div style={{height:"15px",width:'1px'}}></div>

                <div className="customRoleTitle" style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <input onChange={checkChange} style={{cursor:'pointer'}} id="checkbox" name="checkbox" type="checkbox" value="checkbox" checked={checked} /> 
                        &nbsp;
                        <label htmlFor={"checkbox"} style={{cursor:'pointer'}}> 获取流程变量（表单变量/人员变量/环境变量）</label>
                        <div className="popupButtonGrey">支持变量作为参数进行查询</div>
                    </div>
                    {checked?(
                        <div>
                            <i className="icon iconfont icon-tianjia" onClick={addEntry}>&nbsp;</i>
                            
                            {mode?(<span className="bluecolor-hover" onClick={delModeClose} style={{cursor:'pointer'}}>取消</span>)
                                :(<i onClick={delModeOpen} className="icon iconfont icon-shanchu" style={{position:'relative',top:'3px'}}>&nbsp;</i>)
                            }
                        </div>):null}
                </div>

                {checked?(<div className="customRoleTitle" style={{marginBottom: '200px'}}>
                    <EntryGroup mode={mode}/>
                </div>):null}
            </div>
            </div>
        )
    } 
//     return ReactViewComp
// }
