import * as yup from "yup"
export const Schema=yup.object({
    musicName:yup.string().required("Music Name Is Required")
})