import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageInfo from "./pageInfo"
import social from "./social"
import projects from "./projects"
import skill from "./skill"
import experience from "./experience"


export default createSchema({
  name:"default",
  types: schemaTypes.concat([
    skill,
    pageInfo,
    experience,
    social,
    projects,
  ]),
})