
# Beagle-Azure-Task
To trigger Beagle penetration testing from Azure DevOps

## Prerequisites

* Obtain Application Token and Access Token from Beagle Dashboard

### What is Beagle?

Beagle is an intelligent and holistic platform to make your applications hack-proof. The platform provides continuous and automated Penetration Testing (under human supervision) for organizations, so that they can always stay on top of the cyber threats.

In short, Beagle finds out how deep your system can be penetrated. Know it before the hackers do! 

* [Beagle Security](https://beaglesecurity.com/) - Visit for more Details!

### Generate your Access Token From Beagle User Settings:
  Settings -> Access token -> Generate your new personal access token

![Generate user token](https://beagle-assets.s3.ca-central-1.amazonaws.com/share/usertoken.png)

### Generate your Application Token From Beagle
  Home -> Applications -> Select your application -> Settings -> Application token

![Get application token](https://beagle-assets.s3.ca-central-1.amazonaws.com/share/apptoken.png)

## Adding Beagle-Azure-Task to your Project

1. Open your Azure DevOps Project.
2. You can configure Beagle test in your release pipeline or build pipeline.
3. For Release Pipeline.
  * Navigate to `Pipelines` -> `Releases`.
  * Create (or edit existing pipline) a pipleline and `Add a task`.
  * Search the Marketplace for `Beagle Security Test` and click `Add`.
4. For Build Pipeline.
  * Navigate to `Pipelines` -> `Builds`.
  * Create (or edit an existing pipeline) a pipeline and `Add a task`.
  * Search in Tasks for `Beagle Security Test`.
5. Provide the Application Key and Access Key which is generated from your Beagle dashboard.
7. Now while your build or release pipeline is triggered your beagle security test will run.

# Authors

* **Beagle Security**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.