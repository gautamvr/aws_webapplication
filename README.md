# AWS - Web Application

A 3-tiered AWS cloud native web application with
- Endpoints created using node.js - express (Authenticated Endpoints with JWT)
- Hosted on EC2 under an ALB in a custom VPC
- RDS is used as the database
- Along with AWS services S3, SNS, Lambda, CodeDeploy
- Whole cloud stack is created using CloudFormation -  [Cloud formation Stack](https://github.com/gautamvr/aws_infrastructure)

### This is integrated with the CI/CD using Github actions which performs the following steps - 
#### CI:
1. Whenever a merge happens, the webapp is built using nodejs dependencies specified in the packages.json
2. The tests that are added are run and status is checked to be PASSED

#### CD:
3. The deployment is started with the help of packer
4. Packer creates an AMI image with the required files and it's dependencies.
5. Deploy push to AWS S3
6. Create deployment to CodeDeploy

> (Check out the Github actions for the workflow)

