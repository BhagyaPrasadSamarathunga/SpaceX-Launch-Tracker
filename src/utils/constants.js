//Api constants
export const GET_SPACE_DATA = 'https://api.spacexdata.com/v5/launches/query';

export const STATUS = {
  success: 'success',
  failure: 'failure'
}

export const STATUS_PROPS = {
  [STATUS.success]: {
    title: 'Success',
    bgColor: '#d1f5a8'
  },
  [STATUS.failure]: {
    title: 'Failure',
    bgColor: '#f5b0a8'
  }
}