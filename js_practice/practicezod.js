const zod = require("zod");

/*
object{
  name: string
  age: number
  email: string => email
  phone: string => phone
  }

*/

const schema = zod.object({
  name:zod.string(),
  age:zod.number(),
})