import request from '@/utils/request';

/**
 * getProcessXmlByDefKey
 * @param id
 * @returns
 */
export const getProcessXmlByDefKey = (id) => {
  return request(`/yst-workflow/workflow/api/procDefBpmn/${id}`, {
    method: 'get',
  });
};

/**
 * getProcessXmlByInsId
 * @param id
 * @returns
 */
export const getProcessXmlByInsId = (id) => {
  return request(`/yst-workflow/workflow/api/procInstBpmn/${id}`, {
    method: 'get',
  });
};
