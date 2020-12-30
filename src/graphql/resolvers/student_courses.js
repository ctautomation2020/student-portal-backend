import getRegNo from "../auth/getRegNo"
let fs = require('fs')
let path = require('path')

module.exports={
    Query:{
        async studentCourses(parent, {data}, {prisma,req}, info){
            const Register_No = data.Register_No;
            return await prisma.student_courses.findMany({
                where: {
                    Register_No
                }
            })
        },
        
        async studentCourse(parent,{data}, {prisma,req}, info){
            const Academic_ID = data.Academic_ID
            return await prisma.student_courses.findOne({
                where: {
                    Academic_ID
                }
            })
        }
    },

    Mutation: {
        
        async createStudentCourse(parent, {data}, {prisma,req}, info) {
            const {Session_Ref, Semester_Ref, Group_Ref, Class_Type_Ref,...ref_data} = data;
            const Register_No = getRegNo(req);

            if(Session_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Session_Ref={
                    connect:{
                        Reference_ID:Session_Ref
                    }
                }
            }

            if(Semester_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Semester_Ref={
                    connect:{
                        Reference_ID:Semester_Ref
                    }
                }
            }

            if(Group_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Group_Ref={
                    connect:{
                        Reference_ID:Group_Ref
                    }
                }
            }

            if(Class_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Class_Type_Ref={
                    connect:{
                        Reference_ID:Class_Type_Ref
                    }
                }
            }

            return await prisma.student_courses.create({
                data:{
                    student:{
                        connect:{
                            Register_No:Register_No
                        }
                    },
                    ...ref_data
                }
            })
        },

        async updateStudentCourse(parent, {data}, {prisma}, info) {
            const {Award_ID,Award_Type_Ref,Award_Category_Ref,...ref_data} = data;
            if(Session_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Session_Ref={
                    connect:{
                        Reference_ID:Session_Ref
                    }
                }
            }

            if(Semester_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Semester_Ref={
                    connect:{
                        Reference_ID:Semester_Ref
                    }
                }
            }

            if(Group_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Group_Ref={
                    connect:{
                        Reference_ID:Group_Ref
                    }
                }
            }

            if(Class_Type_Ref){
                ref_data.person_reference_table_person_reference_tableTostudent_courses_Class_Type_Ref={
                    connect:{
                        Reference_ID:Class_Type_Ref
                    }
                }
            }
            return await prisma.student_courses.update({
                where:{
                    Academic_ID
                },
                data:{
                    ...ref_data
                }
            })
        },

        async deleteStudentCourse(parent, {data}, {prisma}, info) {
            
            return await prisma.student_courses.delete({
                where:{
                    Academic_ID: data.Academic_ID
                }
            })
        }
    }
    
}
