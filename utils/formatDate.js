import moment from "moment"

export const formatDateShow = (date) => {
    return moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')
}
export const formatDateSend = (date) => {
    return moment(date).format("YYYY-MM-DD")
}