/**
 * Created by easterCat on 2017/8/8.
 */
import $ from 'jquery';
export const ISSUE_FETCHED = 'ISSUE_FETCHED';
export const ISSUE_TYPE_FETCHED = 'ISSUE_TYPE_FETCHED';


export function getCurrentIssue() {
    return dispatch => {
        return $.ajax({
            type: 'GET',
            url: 'http://180.168.170.198:3030/api/issues/59831f0730f8b268e097a96b',
            success: function (msg) {
                dispatch({
                    type:ISSUE_FETCHED,
                    payload:msg
                });
            }
        })
    }
}

export function getIssueType(projectId){
    return dispatch=>{
        return $.ajax({
            type:'GET',
            url:`http://180.168.170.198:3030/api/issue_types?projectid=${projectId}`,
            success:function(msg){
                dispatch({
                    type:ISSUE_TYPE_FETCHED,
                    payload:msg
                });
            }
        })
    }
}