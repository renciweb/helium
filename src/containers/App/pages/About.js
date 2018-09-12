import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'

const homePage = ( props ) => {
    return (
        <Layout>
            <ContentBlock>
                <h1>About Helium</h1>

                <h2>In a Nutshell</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aliquam impedit iure, minus enim similique vitae eligendi recusandae officia ad delectus, et, nostrum voluptatum amet sunt architecto eaque consectetur distinctio.
                </p>

            </ContentBlock>
            <ContentBlock style="robinsegg">
                <h2>Data Commons Pilot Phase Consortium (DCPPC)</h2>
                
                <p>
                    The NIH Data Commons will accelerate biomedical discovery by providing a cloud-based platform
                    where investigators can store, share, access, and compute on digital objects including data,
                    software, workflows, and more. The initial implementation is a Pilot Phase in which targeted
                    high-value data sources will serve as test cases for the infrastructure to be developed.
                    The test datasets will come from the Genotype-Tissue Expression (GTEx) and the Trans-Omics
                    for Precision Medicine (TOPMed) efforts, as well as several Model Organism Databases (MODs).
                    Particular attention will be paid to ensuring that the resources produced by the NIH Data Commons Pilot
                    will adhere to FAIR principles. This work is being carried out by the Data Commons Pilot Phase Consortium (DCPPC).
                </p>

                <h3>Activities within the DCPPC are organized around establishing nine Key Capabilities:</h3>

                <ul>
                    <li>KC1: Establish community-endorsed guidelines and metrics to govern what it means for digital objects in the Commons to be FAIR.</li>
                    <li>KC2: Establish global unique identifiers (GUID) for FAIR biomedical digital objects.</li>
                    <li>KC3: Provide open standard APIs and maximize their ability to be reused. </li>
                    <li>KC4: Build cloud-agnostic architectures and frameworks for data exchange and analysis workflow use.</li>
                    <li>KC5: Create workspaces for users to engage in analysis of diverse datasets with established pipelines and then visualize the results. </li>
                    <li>KC6: Establish approaches to address concerns around research ethics, privacy, and security.</li>
                    <li>KC7: Deploy robust indexing and search systems.</li>
                    <li>KC8: Develop use cases around DCPPC resources to test the ability of the products to enable researchers to address scientific questions of interest.</li>
                    <li>KC9: Engage in training and outreach.</li>
                </ul>

            </ContentBlock>

            <ContentBlock style="helium">
                <h3>Helium + and Data Stage</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, autem eum ea distinctio doloribus nihil impedit tempora repudiandae dignissimos ullam. Ipsam quisquam, corporis repellat repudiandae quaerat? Obcaecati, ducimus nostrum harum.
                </p>

            </ContentBlock>

            <ContentBlock style="pigeon">
                <h3>Workstream</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, autem eum ea distinctio doloribus nihil impedit tempora repudiandae dignissimos ullam. Ipsam quisquam, corporis repellat repudiandae quaerat? Obcaecati, ducimus nostrum harum.
                </p>

            </ContentBlock>

            <ContentBlock>
                <p>
                    An important component of the Data Commons is interaction with other large data resources at the NIH. During the Pilot Phase of the Data Commons, select data sets are used as test scenarios, but the ultimate vision of the Data Commons is to enable all biomedical data sets to be findable, accessible, interoperable, and reusable (FAIR). Once the Data Commons Pilot Phase has achieved its primary objectives, the platforms, tools, and methods developed with the three test case data sets will be extended to additional NIH data sets. These data sets will likely come from programs that have near-term needs for big data sharing and computation at a scale that can be addressed by the solutions generated by the Data Commons Pilot Phase.
                </p>

                <p>
                    The goal is to create a platform that engages different research communities to develop new tools that will be integrated into the commons. Researchers will be able to access and interact with data directly in the cloud environment, eliminating the need for costly and time-consuming downloads to local servers. The DCPPC is also developing these components to work on a variety of cloud platforms and multiple cloud locations.
                </p>

                <p>
                    The NIH Data Commons Pilot Phase is being developed with an eye toward interoperability with existing data structures such as the NCI Genome Data Commons, AHA Precision Medicine platform, and the European Data Commons. Data Commons Pilot Phase staff are also coordinating with other NIH programs (e.g., All of Us Research Program), US government (e.g., National Science Foundation), and foreign activities (e.g., ELIXIR) relevant to the Data Commons.
                </p>
            </ContentBlock>
        </Layout>
    )
}

export default homePage