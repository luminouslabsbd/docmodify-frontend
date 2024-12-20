export const defaultRequirements = {
    requirement_13: {
        assignment: true,
        title: 'I Assessment Overview',
        descriptions: {
            13.1: {
                assignment: true,
                title: '1 Contact Information and Summary of Results',
                pciDss: {
                    '13.1.1': {
                        assignment: true,
                        title: '1.1 Contact Information',
                        tableBody: [
                            {
                                title: 'Assessed Entity',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'Company name',
                                name: 'company_name_1_1',
                            },
                            {
                                title: 'DBA (doing business as)',
                                name: 'dba_1_1',
                            },
                            {
                                title: 'Mailing address',
                                name: 'mailing_address_1_1',
                            },
                            {
                                title: 'Company main website',
                                name: 'website_1_1',
                            },
                            {
                                title: 'Contact name',
                                name: 'contact_name_1_1',
                            },
                            {
                                title: 'Contact title',
                                name: 'contact_title_1_1',
                            },
                            {
                                title: 'Contact phone number',
                                name: 'contact_phone_1_1',
                            },
                            {
                                title: 'Contact e-mail address',
                                name: 'contact_email_1_1',
                            },
                            {
                                title: 'Assessed Entity Internal Security Assessors',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'Identify all Internal Security Assessors (ISAs) involved in the assessment. If there were none, mark as Not Applicable. (Add rows as needed)',
                                colspan: 2,
                            },
                            {
                                title: 'ISA name:',
                                name: 'isa_name',
                            },
                            {
                                title: 'Qualified Security Assessor Company',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'Company name:',
                                name: 'company_name_3_4',
                            },
                            {
                                title: 'Mailing address:',
                                name: 'mailing_address_3_4',
                            },
                            {
                                title: 'Company website:',
                                name: 'company_website_3_4',
                            },
                            {
                                title: 'Lead Qualified Security Assessor',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'Lead Assessor name: ',
                                name: 'lead_assessor_name_3_4',
                            },
                            {
                                title: 'Assessor phone number: ',
                                name: 'assessor_phone_number_3_4',
                            },
                            {
                                title: 'Assessor e-mail address: ',
                                name: 'assessor_email_3_4',
                            },
                            {
                                title: 'Assessor certificate number: ',
                                name: 'assessor_certificate_number_3_4',
                            },
                            {
                                title: 'Additional Assessors',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'Identify all Associate QSAs involved in the assessment. If there were none, mark as Not Applicable. (Add rows as needed)',
                                colspan: 2,
                            },
                            {
                                title: 'Associate QSA name:',
                                name: 'associate_qsa_name_3_5',
                            },
                            {
                                title: 'Associate QSA mentor name:',
                                name: 'associate_qsa_mentor_name_3_5',
                            },
                            {
                                title: 'Identify all other assessors involved in the assessment. If there were none, mark as Not Applicable. (Add rows as needed)',
                                colspan: 2,
                            },
                            {
                                title: 'Assessor name:',
                                name: 'assessor_name_3_5',
                            },
                            {
                                title: 'Assessor certificate number:',
                                name: 'assessor_certificate_number_3_5',
                            },
                            {
                                title: 'Assessor Quality Assurance (QA) Primary Reviewer for this specific report (not the general QA contact for the QSA Company)',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                title: 'QA reviewer name: ',
                                name: 'qa_reviewer_name_3_6',
                            },
                            {
                                title: 'QA reviewer phone number: ',
                                name: 'qa_reviewer_phone_number_3_6',
                            },
                            {
                                title: 'QA reviewer e-mail address: ',
                                name: 'qa_reviewer_email_3_6',
                            },
                            {
                                title: 'QA reviewer’s PCI credentials or certificate number: (See the current QSA Qualification Requirements for acceptable credentials)',
                                name: 'qa_reviewer_pci_credentials_3_6',
                            },
                        ],
                    },
                    '13.1.2': {
                        assignment: true,
                        title: '1.2 Date and Timeframe of Assessment',
                        tableBody: [
                            {
                                title: 'Date of Report: Note: The “Date of Report” indicates the completion date of the ROC, and therefore must be no earlier than the date on which the QSA Company and assessed entity agree on the final version of the ROC.',
                                name: 'date_report_note',
                            },
                            {
                                title: 'Date assessment began: Note: This is the first date that evidence was gathered, or observations were made.',
                                name: 'date_assessment_began',
                            },
                            {
                                title: 'Date assessment ended: Note: This is the last date that evidence was gathered, or observations were made.',
                                name: 'date_assessment_ended',
                            },
                            {
                                title: 'Identify the date(s) spent onsite at the assessed entity.',
                                name: 'dates_spent_onsite',
                            },
                        ],
                    },
                    '13.1.3': {
                        assignment: true,
                        title: '1.3 Remote Assessment Activities',
                        subTitle: '<p>Refer to the PCI SSC Remote Assessment Guidelines and Procedures on the PCI SSC website for more information.</p>',
                        tableBody: [
                            {
                                title: 'To what extent were remote testing methods used for this assessment?',
                                content:
                                    '<div>\n                                        <div class="form-check">\n                                            <label class="form-check-label" for="onsite">All testing was performed onsite</label>\n                                        </div>\n                                        <div class="form-check">\n                                            <label class="form-check-label" for="combination">A combination of onsite and remote testing methods was used</label>\n                                        </div>\n                                        <div class="form-check">\n                                            <label class="form-check-label" for="remote">All testing was performed remotely</label>\n                                        </div>\n                                    </div>',
                            },
                            {
                                title: 'If remote testing was used for any part of the assessment, briefly describe why onsite testing was not feasible or practical:',
                                name: 'remote_testing_reason',
                            },
                        ],
                    },
                    '13.1.4': {
                        assignment: true,
                        title: '1.4 Additional Services Provided by QSA Company',
                        subTitle:
                            '<p>The PCI SSC Qualification Requirements for Qualified Security Assessors (QSA) includes content on “Independence,” which specifies requirements for assessor disclosure of services and/or offerings that could reasonably be viewed to affect the independence of assessment. Complete the section below after reviewing the relevant portions of the Qualification Requirements to ensure responses are consistent with documented obligations.</p>',
                        tableBody: [
                            {
                                title: 'Indicate whether the QSA Company provided any consultation on the development or implementation of controls used for the Customized Approach:',
                                name: 'consultation_provided_1_4',
                            },
                            {
                                title: "If 'Yes,' describe the nature of the consultation:",
                                name: 'consultation_description_1_4',
                            },
                            {
                                title: 'Disclose all products or services provided to the assessed entity by the QSA Company that are not listed above and that were reviewed during this assessment or could reasonably be viewed to affect independence of assessment:',
                                name: 'products_services_disclosure_1_4',
                            },
                            {
                                title: 'Describe efforts made to ensure no conflict of interest resulted from the above-mentioned products and services provided by the QSA Company:',
                                name: 'conflict_of_interest_description_1_4',
                            },
                        ],
                    },
                    '13.1.5': {
                        assignment: true,
                        title: '1.5 Use of Subcontractors',
                        tableBody: [
                            {
                                title: 'Indicate whether any assessment activities were subcontracted to another Assessor Company. Note: The use of subcontractors must conform with the requirements defined in the Qualification Requirements for Qualified Security Assessors (QSA) and Qualified Security Assessor Program Guide:',
                                name: 'subcontracted_assessment_activities_1_5',
                            },
                            {
                                title: 'If yes, identify the Assessor Company(s) utilized during the assessment:',
                                name: 'subcontractor_company_name_1_5',
                            },
                        ],
                    },
                    '13.1.6': {
                        assignment: true,
                        title: '1.6 Additional Information/Reporting',
                        tableBody: [
                            {
                                title: 'Identify the number of consecutive years (including the current year) the QSA Company has issued ROCs for this entity.',
                                name: 'roc_consecutive_years_1_6',
                            },
                        ],
                    },
                    '13.1.7': {
                        assignment: true,
                        title: '1.7 Overall Assessment Result',
                        tableBody: [
                            {
                                title: 'Indicate below whether a full or partial assessment was completed. Select only one.',
                                colspan: 2,
                            },
                            {
                                isLeft: true,
                                title: 'Full Assessment: All requirements have been assessed and therefore no requirements were marked as Not Tested.',
                                name: 'full_assessment_1_7',
                            },
                            {
                                isLeft: true,
                                title: 'Partial Assessment: One or more requirements have not been assessed and were therefore marked as Not Tested. Any requirement not assessed is noted as Not Tested in section 1.8.1 below.',
                                name: 'partial_assessment_1_7',
                            },
                            {
                                title: 'Overall Assessment Result (Select only one)',
                                colspan: 2,
                                bg: 'teal',
                            },
                            {
                                isLeft: true,
                                title: 'Compliant: All sections of the PCI DSS ROC are complete, and all assessed requirements are marked as being either In Place or Not Applicable, resulting in an overall COMPLIANT rating; thereby the assessed entity has demonstrated compliance with all PCI DSS requirements except those noted as Not Tested above.',
                                name: 'compliant_1_7',
                            },
                            {
                                isLeft: true,
                                title: 'Non-Compliant: Not all sections of the PCI DSS ROC are complete, or one or more requirements are marked as Not in Place, resulting in an overall NON-COMPLIANT rating; thereby the assessed entity has not demonstrated compliance with PCI DSS requirements.',
                                name: 'non_compliant_1_7',
                            },
                            {
                                isLeft: true,
                                title: 'Compliant but with Legal Exception: One or more assessed requirements in the ROC are marked as Not in Place due to a legal restriction that prevents the requirement from being met and all other assessed requirements are marked as being either In Place or Not Applicable, resulting in an overall COMPLIANT BUT WITH LEGAL EXCEPTION rating, thereby the assessed entity has demonstrated compliance with all PCI DSS requirements except those noted as Not Tested above or as Not in Place due to a legal restriction.',
                                name: 'compliant_legal_exception_1_7',
                            },
                        ],
                    },
                    '13.1.8': {
                        assignment: true,
                        title: '1.8 Summary of Assessment',
                        subTitle:
                            '<h5>1.8.1 Summary of Assessment Findings and Methods</h5><p>Indicate all the findings and assessment methods within each PCI DSS principal requirement. Select all that apply. For example, In Place and Not Applicable must both be selected for Requirement 1 if there is at least one sub-requirement marked In Place and one sub-requirement marked Not Applicable. The columns for Compensating Controls and Customized Approach must be selected if there is at least one sub-requirement within the principal requirement that utilizes the respective method. For example, Compensating Control and Customized Approach must both be checked if at least one sub-requirement utilizes Compensating Controls and at least one sub requirement utilizes a Customized Approach. If neither Compensating Controls nor Customized Approach are used, then leave both blank.</p>',
                        isRequirement: true,
                        tableBody: [
                            {
                                title: 'Requirement 1',
                                inputs: [
                                    {
                                        name: 'requirement_1_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_1_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_1_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_1_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_1_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_1_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 2',
                                inputs: [
                                    {
                                        name: 'requirement_2_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_2_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_2_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_2_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_2_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_2_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 3',
                                inputs: [
                                    {
                                        name: 'requirement_3_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_3_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_3_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_3_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_3_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_3_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 4',
                                inputs: [
                                    {
                                        name: 'requirement_4_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_4_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_4_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_4_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_4_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_4_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 5',
                                inputs: [
                                    {
                                        name: 'requirement_5_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_5_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_5_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_5_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_5_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_5_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 6',
                                inputs: [
                                    {
                                        name: 'requirement_6_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_6_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_6_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_6_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_6_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_6_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 7',
                                inputs: [
                                    {
                                        name: 'requirement_7_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_7_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_7_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_7_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_7_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_7_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 8',
                                inputs: [
                                    {
                                        name: 'requirement_8_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_8_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_8_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_8_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_8_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_8_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 9',
                                inputs: [
                                    {
                                        name: 'requirement_9_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_9_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_9_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_9_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_9_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_9_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 10',
                                inputs: [
                                    {
                                        name: 'requirement_10_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_10_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_10_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_10_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_10_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_10_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 11',
                                inputs: [
                                    {
                                        name: 'requirement_11_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_11_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_11_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_11_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_11_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_11_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Requirement 12',
                                inputs: [
                                    {
                                        name: 'requirement_12_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'requirement_12_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'requirement_12_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'requirement_12_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'requirement_12_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'requirement_12_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Appendix A1',
                                inputs: [
                                    {
                                        name: 'appendixa_1_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'appendixa_1_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'appendixa_1_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'appendixa_1_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'appendixa_1_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'appendixa_1_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Appendix A2',
                                inputs: [
                                    {
                                        name: 'appendixa_2_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'appendixa_2_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'appendixa_2_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'appendixa_2_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'appendixa_2_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'appendixa_2_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                            {
                                title: 'Appendix A3',
                                inputs: [
                                    {
                                        name: 'appendixa_3_of_1_8_in_place',
                                        label: 'In Place',
                                    },
                                    {
                                        name: 'appendixa_3_of_1_8_not_applicable',
                                        label: 'Not Applicable',
                                    },
                                    {
                                        name: 'appendixa_3_of_1_8_not_tested',
                                        label: 'Not Tested',
                                    },
                                    {
                                        name: 'appendixa_3_of_1_8_not_in_place',
                                        label: 'Not in Place',
                                    },
                                    {
                                        name: 'appendixa_3_of_1_8_compensating_control',
                                        label: 'Compensating Control',
                                    },
                                    {
                                        name: 'appendixa_3_of_1_8_customized_approach',
                                        label: 'Customized Approach',
                                    },
                                ],
                            },
                        ],
                    },
                },
            },
            13.2: {
                assignment: true,
                title: '2 Business Overview',
                pciDss: {
                    '13.2.1': {
                        assignment: true,
                        title: '2.1 Description of the Entity’s Payment Card Business',
                        subTitle: '<p>Provide an overview of the entity’s payment card business, including:</p>',
                        tableBody: [
                            {
                                title: 'Describe the nature of the entity’s business (what kind of work they do, etc.). Note: This is not intended to be a cut-and-paste from the entity’s website but should be a tailored description that shows the assessor understands the business of the entity being assessed.',
                                name: 'entity_business_description_2_1',
                            },
                            {
                                title: 'Describe the entity’s business, services, or functions that store, process, or transmit account data.',
                                name: 'entity_services_description_2_1',
                            },
                            {
                                title: 'Describe any services or functions that the entity performs that could impact the security of account data. (For example, merchant web site payment redirects or if the entity provides managed services)',
                                name: 'entity_security_impact_services_2_1',
                            },
                            {
                                title: 'Identify the payment channels the entity utilizes.',
                                name: 'card_present_2_1',
                            },
                            {
                                title: 'Other details, if applicable:',
                                name: 'other_details_applicable_2_1',
                            },
                        ],
                    },
                },
            },
            13.3: {
                assignment: true,
                title: '3 Description of Scope of Work and Approach Taken',
                pciDss: {
                    '13.3.1': {
                        assignment: true,
                        title: '3.1 Assessor’s Validation of Defined Scope Accuracy',
                        subTitle:
                            '<p>Describe how the assessor validated the accuracy of the defined PCI DSS scope for the assessment:</p><p>As noted in Payment Card Industry Data Security Standard (PCI DSS) Requirements and Testing Procedures: “The minimum steps for an entity to confirm the accuracy of their PCI DSS scope are specified in PCI DSS Requirement 12.5.2. The entity is expected to retain documentation to show how PCI DSS scope was determined. The documentation is retained for assessor review and for reference during the entity’s next PCI DSS scope confirmation activity. For each PCI DSS assessment, the assessor validates that the scope of the assessment is accurately defined and documented.” </p>',
                        tableBody: [
                            {
                                title: 'Describe how the assessor’s evaluation of scope differs from the assessed entity’s evaluation of scope as documented in Requirement 12.5. If no difference was identified, mark as “Not Applicable.”',
                                name: 'assessor_scope_difference_3_1',
                            },
                            {
                                title: 'Provide the name of the assessor who attests that:',
                                name: 'assessor_name_attestation_3_1',
                                details:
                                    '<ul>\n                                                    <li>They have performed an independent evaluation of the scope of the assessed entity’s PCI DSS environment.</li>\n                                                    <li>If the assessor’s evaluation identified areas of scope not included in the assessed entity’s documented scope, the assessed entity has updated their scoping documentation.</li>\n                                                    <li>The scope of the assessment is complete and accurate to the best of the assessor’s knowledge.</li>\n                                                </ul>',
                            },
                            {
                                title: 'Describe any business functions, locations, payment channels, or other areas of scope that were excluded from the assessment including the following:',
                                name: 'excluded_scope_description_3_1',
                                details:
                                    '<ul>\n                                                    <li>What was excluded.</li>\n                                                    <li>Why was it excluded.</li>\n                                                    <li>If it was included in a separate assessment.</li>\n                                                </ul>',
                            },
                            {
                                title: 'Identify any factors that resulted in reducing or limiting scope (for example, segmentation of the environment, use of a P2PE solution, etc.) If none, mark as “Not Applicable.”',
                                name: 'scope_limiting_factors_3_1',
                            },
                            {
                                title: 'Describe any use of SAQ eligibility criteria in determining applicability of PCI DSS requirements for this assessment, including the following:',
                                name: 'saq_eligibility_description_3_1',
                                details:
                                    '<ul>\n                                                    <li>The type of SAQ applied.</li>\n                                                    <li>The eligibility criteria for the applicable SAQ.</li>\n                                                    <li>How the assessor verified that the assessed entity’s environment meets the eligibility criteria.</li>\n                                                </ul>',
                                note: 'If not used mark as “Not Applicable.” Note: The only SAQ for service providers is SAQ D for Service Providers. All other SAQs are for merchants only.',
                            },
                            {
                                title: 'Additional information, if applicable:',
                                name: 'additional_information_3_1',
                            },
                        ],
                    },
                    '13.3.2': {
                        assignment: true,
                        title: '3.2 Segmentation',
                        tableBody: [
                            {
                                title: 'Indicate whether the assessed entity has used segmentation to reduce the scope of the assessment. Note: An environment with no segmentation is considered a “flat” network where all systems are considered to be in scope.',
                                name: 'segmentation_used_3_2',
                            },
                            {
                                title: '<li>If “No,” provide the name of the assessor who attests that the entire network has been included in the scope of the assessment.</li>',
                                name: 'ifNoProvideAssessment_3_2',
                            },
                            {
                                title: '<li>If “Yes,” complete the following:</li>',
                                colspan: 2,
                            },
                            {
                                title: '- Describe how the segmentation is implemented, including the technologies and processes used.',
                                name: 'includingTechnologiesProcesses_3_2',
                            },
                            {
                                title: '- Describe the environments that were confirmed to be out of scope as a result of the segmentation methods.',
                                name: 'confirmedSegmentationMethods_3_2',
                            },
                            {
                                title: '- Provide the name of the assessor who attests that the segmentation was verified to be adequate to reduce the scope of the assessment AND that the technologies/processes used to implement segmentation were included in this PCI DSS assessment.',
                                name: 'technologiesProcessesUsedImplement_3_2',
                            },
                        ],
                    },
                    '13.3.3': {
                        assignment: true,
                        title: '3.3 PCI SSC Validated Products and Solutions',
                        subTitle:
                            'For purposes of this document, “Lists of Validated Products and Solutions” means the lists of validated products, solutions, and/or components, appearing on the PCI SSC website (www.pcisecuritystandards.org) (For example: 3DS Software Development Kits, Approved PTS Devices, Validated Payment Software, Point to Point Encryption [P2PE] solutions, Software-Based PIN Entry on COTS [SPoC] solutions, Contactless Payments on COTS [CPoC] solutions, and Mobile Payment on COTS [MPoC] products.)',
                        isValidatedProducts_3_3: true,
                        tableBody: [
                            {
                                title: 'Indicate whether the assessed entity uses one or more PCI SSC validated products or solutions.',
                                name: 'indicate_whether_assessed_solutions_3_3',
                            },
                            {
                                title: "If “Yes,” provide the following information regarding items the organization uses from PCI SSC ' s Lists of Validated Products and Solutions:",
                                colspan: 2,
                            },
                        ],
                        tableBody_3_2: [
                            {
                                names: [
                                    'namePciSscValidated_3_2_1',
                                    'VersionProductSolution_3_2_1',
                                    'pciSscStandardWhichValidated_3_2_1',
                                    'pciSscListingReferenceNumber_3_2_1',
                                    'expiryDateListing_3_2_1',
                                ],
                            },
                            {
                                names: [
                                    'namePciSscValidated_3_2_2',
                                    'VersionProductSolution_3_2_2',
                                    'pciSscStandardWhichValidated_3_2_2',
                                    'pciSscListingReferenceNumber_3_2_2',
                                    'expiryDateListing_3_2_2',
                                ],
                            },
                            {
                                names: [
                                    'namePciSscValidated_3_2_3',
                                    'VersionProductSolution_3_2_3',
                                    'pciSscStandardWhichValidated_3_2_3',
                                    'pciSscListingReferenceNumber_3_2_3',
                                    'expiryDateListing_3_2_3',
                                ],
                            },
                            {
                                names: [
                                    'namePciSscValidated_3_2_4',
                                    'VersionProductSolution_3_2_4',
                                    'pciSscStandardWhichValidated_3_2_4',
                                    'pciSscListingReferenceNumber_3_2_4',
                                    'expiryDateListing_3_2_4',
                                ],
                            },
                        ],
                        tableBody_3_3: [
                            {
                                title: 'Provide the name of the assessor who attests that they have read the instruction manual associated with each of the software/solution(s) listed above and confirmed that the merchant has implemented the solution per the instructions and detail in the instruction manual.',
                                name: 'assessorWhoAttestsInstruction_3_3',
                            },
                            {
                                title: 'Any additional comments or findings the assessor would like to include, if applicable.',
                                name: 'anyAdditionalCommentsOrFindings_3_3',
                            },
                        ],
                    },
                },
            },
            13.4: {
                assignment: true,
                title: '4 Details About Reviewed Environments',
                pciDss: {
                    '13.4.1': {
                        assignment: true,
                        title: '4.1 Network Diagrams',
                        subTitle:
                            '\n                                <p>Provide one or more network diagrams that:</p>\n                                <ul style="list-style: square;">\n                                    <li> Shows all connections between the CDE and other networks, including any wireless networks.</li>\n                                    <li>Is accurate and up to date with any changes to the environment.</li>\n                                    <li>Illustrates all network security controls that are defined for connection points between trusted and untrusted networks.</li>\n                                    <li>Illustrates how system components storing cardholder data are not directly accessible from the untrusted networks. </li>\n                                    <li>Includes the techniques (such as intrusion-detection systems and/or intrusion-prevention systems) that are in place to monitor all traffic:\n                                        <li>At the perimeter of the cardholder data environment.</li>\n                                        <li>At critical points in the cardholder data environment.</li>\n                                    </ul>\n                                </ul>\n                            ',
                    },
                    '13.4.2': {
                        assignment: true,
                        title: '4.2 Account Dataflow Diagrams',
                        subTitle:
                            '\n                                <p>Provide one or more dataflow diagrams that:</p>\n                                <ul style="list-style: square;">\n                                    <li>Shows all account data flows across systems and networks.</li>\n                                    <li>Are accurate and up to date.</li>\n                                </ul>\n                                <h4>4.2.1 Description of Account Data Flows</h4>\n                            ',
                        tableBody: [
                            {
                                title: 'Identify in which of the following account data flows the assessed entity participates: Note: These data flows must be described in detail in the sections of the table that follow.',
                                colspan: 2,
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_1: {
        title: 'Requirement 1: Install and Maintain Network Security Controls',
        descriptions: {
            1.1: {
                title: '1.1 Processes and mechanisms for installing and maintaining network security controls are defined and understood.',
                pciDss: {
                    '1.1.1': {
                        title: '<p>1.1.1 All security policies and operational procedures that are identified in Requirement 1 are:</p>\n                                                    <ul>\n                                                        <li>Documented.</li>\n                                                        <li>Kept up to date.</li>\n                                                        <li>In use.</li>\n                                                        <li>Known to all affected parties.</li>\n                                                    </ul>',
                        names: [
                            'inPlace_1_1_1',
                            'notApplicable_1_1_1',
                            'notTested_1_1_1',
                            'notInPlace_1_1_1',
                            'compensatingControl_1_1_1',
                            'customizedApproach_1_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 1 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentation_1_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_1_1_1',
                                },
                            },
                        ],
                    },
                    '1.1.2': {
                        title: '<p>1.1.2 Roles and responsibilities for performing activities in Requirement 1 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_1_1_2',
                            'notApplicable_1_1_2',
                            'notTested_1_1_2',
                            'notInPlace_1_1_2',
                            'compensatingControl_1_1_2',
                            'customizedApproach_1_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                                                        <i>\n                                                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                                                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                                                        </i>',
                            name: 'describeWhyTheAssessment_1_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 1 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentation_1_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '1.1.2.b Interview personnel responsible for performing activities in Requirement 1 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_1_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            1.2: {
                title: '<p>1.2 Network security controls (NSCs) are configured and maintained.</p>',
                pciDss: {
                    '1.2.1': {
                        title: '<p>1.2.1 Configuration standards for NSC rulesets are:</p>\n                    <ul>\n                        <li>Defined.</li>\n                        <li>Implemented.</li>\n                        <li>Maintained.</li>\n                    </ul>',
                        names: [
                            'inPlace_1_2_1',
                            'notApplicable_1_2_1',
                            'notTested_1_2_1',
                            'notInPlace_1_2_1',
                            'compensatingControl_1_2_1',
                            'customizedApproach_1_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.1.a Examine the configuration standards for NSC rulesets to verify the standards are in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration standards examined for this testing procedure.',
                                    name: 'configurationStandards_1_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.1.b Examine configuration settings for NSC rulesets to verify that rulesets are implemented according to the configuration standards.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettings_1_2_1',
                                },
                            },
                        ],
                    },
                    '1.2.2': {
                        title: '<p>1.2.2 All changes to network connections and to configurations of NSCs are approved and managed in accordance with the change control process defined at Requirement 6.5.1.</p>',
                        names: [
                            'inPlace_1_2_2',
                            'notApplicable_1_2_2',
                            'notTested_1_2_2',
                            'notInPlace_1_2_2',
                            'compensatingControl_1_2_2',
                            'customizedApproach_1_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                                                        <i>\n                                                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                                                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                                                        </i>',
                            name: 'describeWhyTheAssessment_1_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.2.a Examine documented procedures to verify that changes to network connections and configurations of NSCs are included in the formal change control process in accordance with Requirement 6.5.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined for this testing procedure.',
                                    name: 'documentedProcedures_1_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.2.b Examine network configuration settings to identify changes made to network connections. Interview responsible personnel and examine change control records to verify that identified changes to network connections were approved and managed in accordance with Requirement 6.5.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network configuration settings examined for this testing procedure.',
                                    name: 'networkConfigConnections_1_2_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConnections_1_2_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all change control records examined for this testing procedure.',
                                    name: 'changeControlRecordsConnections_1_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.2.c Examine network configuration settings to identify changes made to configurations of NSCs. Interview responsible personnel and examine change control records to verify that identified changes to configurations of NSCs were approved and managed in accordance with Requirement 6.5.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network configuration settings examined for this testing procedure.',
                                    name: 'networkConfigNSC_1_2_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsNSC_1_2_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all change control records examined for this testing procedure.',
                                    name: 'changeControlRecordsNSC_1_2_2',
                                },
                            },
                        ],
                    },
                    '1.2.3': {
                        title: '<p>1.2.3 An accurate network diagram(s) is maintained that shows all connections between the CDE and other networks, including any wireless networks.</p>',
                        names: [
                            'inPlace_1_2_3',
                            'notApplicable_1_2_3',
                            'notTested_1_2_3',
                            'notInPlace_1_2_3',
                            'compensatingControl_1_2_3',
                            'customizedApproach_1_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.3.a Examine diagram(s) and network configurations to verify that an accurate network diagram(s) exists in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all diagrams examined for this testing procedure.',
                                    name: 'diagramsExamined_1_2_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all network configurations examined for this testing procedure.',
                                    name: 'networkConfigurations_1_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.3.b Examine documentation and interview responsible personnel to verify that the network diagram(s) is accurate and updated when there are changes to the environment.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentation_1_2_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_1_2_3',
                                },
                            },
                        ],
                    },
                    '1.2.4': {
                        title: '<p>1.2.4 An accurate data-flow diagram(s) is maintained that meets the following:\n                    <ul>\n                        <li>Shows all account data flows across systems and networks.</li>\n                        <li>Updated as needed upon changes to the environment.</li>\n                    </ul>\n                   </p>',
                        names: [
                            'inPlace_1_2_4',
                            'notApplicable_1_2_4',
                            'notTested_1_2_4',
                            'notInPlace_1_2_4',
                            'compensatingControl_1_2_4',
                            'customizedApproach_1_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.4.a Examine data-flow diagram(s) and interview personnel to verify the diagram(s) show all account data flows in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data-flow diagram(s) examined for this testing procedure.',
                                    name: 'dataFlowDiagramsExamined_1_2_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_1_2_4_a',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.4.b Examine documentation and interview responsible personnel to verify that the data-flow diagram(s) is accurate and updated when there are changes to the environment.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_1_2_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_1_2_4_b',
                                },
                            },
                        ],
                    },
                    '1.2.5': {
                        title: '<p>1.2.5 All services, protocols, and ports allowed are identified, approved, and have a defined business need.</p>',
                        names: [
                            'inPlace_1_2_5',
                            'notApplicable_1_2_5',
                            'notTested_1_2_5',
                            'notInPlace_1_2_5',
                            'compensatingControl_1_2_5',
                            'customizedApproach_1_2_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.5.a Examine documentation to verify that a list exists of all allowed services, protocols, and ports, including business justification and approval for each.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_1_2_5',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.5.b Examine configuration settings for NSCs to verify that only approved services, protocols, and ports are in use.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_1_2_5',
                                },
                            },
                        ],
                    },
                    '1.2.6': {
                        title: '<p>1.2.6 Security features are defined and implemented for all services, protocols, and ports that are in use and considered to be insecure, such that the risk is mitigated.</p>',
                        names: [
                            'inPlace_1_2_6',
                            'notApplicable_1_2_6',
                            'notTested_1_2_6',
                            'notInPlace_1_2_6',
                            'compensatingControl_1_2_6',
                            'customizedApproach_1_2_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i><b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.</i>',
                            name: 'describeWhyTheAssessment_1_2_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.6.a Examine documentation that identifies all insecure services, protocols, and ports in use to verify that for each, security features are defined to mitigate the risk.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_1_2_6',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.6.b Examine configuration settings for NSCs to verify that the defined security features are implemented for each identified insecure service, protocol, and port.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_1_2_6',
                                },
                            },
                        ],
                    },
                    '1.2.7': {
                        title: '<p>1.2.7 Configurations of NSCs are reviewed at least once every six months to confirm they are relevant and effective.</p>',
                        names: [
                            'inPlace_1_2_7',
                            'notApplicable_1_2_7',
                            'notTested_1_2_7',
                            'notInPlace_1_2_7',
                            'compensatingControl_1_2_7',
                            'customizedApproach_1_2_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.7.a Examine documentation to verify procedures are defined for reviewing configurations of NSCs at least once every six months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationReview_1_2_7',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.7.b Examine documentation of reviews of configurations for NSCs and interview responsible personnel to verify that reviews occur at least once every six months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'configReview_1_2_7',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsReview_1_2_7',
                                },
                            },
                            {
                                td: {
                                    0: '1.2.7.c Examine configurations for NSCs to verify that configurations identified as no longer being supported by a business justification are removed or updated.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsNSC_1_2_7',
                                },
                            },
                        ],
                    },
                    '1.2.8': {
                        title: '<p>1.2.8 Configuration files for NSCs are:\n                       <ul>\n                           <li>Secured from unauthorized access.</li>\n                           <li>Kept consistent with active network configurations.</li>\n                       </ul>\n                   </p>',
                        names: [
                            'inPlace_1_2_8',
                            'notApplicable_1_2_8',
                            'notTested_1_2_8',
                            'notInPlace_1_2_8',
                            'compensatingControl_1_2_8',
                            'customizedApproach_1_2_8',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                        <i>\n                            <b>Note</b>: Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                        </i>',
                            name: 'describeWhyTheAssessment_1_2_8',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.2.8 Examine configuration files for NSCs to verify they are in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration files examined for this testing procedure.',
                                    name: 'configurationFiles_1_2_8',
                                },
                            },
                        ],
                    },
                },
            },
            1.3: {
                title: '<p>1.3 Network access to and from the cardholder data environment is restricted.</p>',
                pciDss: {
                    '1.3.1': {
                        title: '<p>1.3.1 Inbound traffic to the CDE is restricted as follows:\n                    <ul>\n                        <li>To only traffic that is necessary.</li>\n                        <li>All other traffic is specifically denied.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_1_3_1',
                            'notApplicable_1_3_1',
                            'notTested_1_3_1',
                            'notInPlace_1_3_1',
                            'compensatingControl_1_3_1',
                            'customizedApproach_1_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.3.1.a Examine configuration standards for NSCs to verify that they define restricting inbound traffic to the CDE in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration standards examined for this testing procedure.',
                                    name: 'configStandards_1_3_1',
                                },
                            },
                            {
                                td: {
                                    0: '1.3.1.b Examine configurations of NSCs to verify that inbound traffic to the CDE is restricted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configNSCs_1_3_1',
                                },
                            },
                        ],
                    },
                    '1.3.2': {
                        title: '<p>1.3.2 Outbound traffic from the CDE is restricted as follows:\n                    <ul>\n                        <li>To only traffic that is necessary.</li>\n                        <li>All other traffic is specifically denied.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_1_3_2',
                            'notApplicable_1_3_2',
                            'notTested_1_3_2',
                            'notInPlace_1_3_2',
                            'compensatingControl_1_3_2',
                            'customizedApproach_1_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.3.2.a Examine configuration standards for NSCs to verify that they define restricting outbound traffic from the CDE in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration standards examined for this testing procedure.',
                                    name: 'configStandards_1_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '1.3.2.b Examine configurations of NSCs to verify that outbound traffic from the CDE is restricted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configNSCs_1_3_2',
                                },
                            },
                        ],
                    },
                    '1.3.3': {
                        title: '<p>1.3.3 NSCs are installed between all wireless networks and the CDE, regardless of whether the wireless network is a CDE, such that:\n                    <ul>\n                        <li>All wireless traffic from wireless networks into the CDE is denied by default.</li>\n                        <li>Only wireless traffic with an authorized business purpose is allowed into the CDE.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_1_3_3',
                            'notApplicable_1_3_3',
                            'notTested_1_3_3',
                            'notInPlace_1_3_3',
                            'compensatingControl_1_3_3',
                            'customizedApproach_1_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.3.3 Examine configuration settings and network diagrams to verify that NSCs are implemented between all wireless networks and the CDE, in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configSettings_1_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all network diagrams examined for this testing procedure.',
                                    name: 'networkDiagrams_1_3_3',
                                },
                            },
                        ],
                    },
                },
            },
            1.4: {
                title: '<p>1.4 Network connections between trusted and untrusted networks are controlled.</p>',
                pciDss: {
                    '1.4.1': {
                        title: '<p>1.4.1 NSCs are implemented between trusted and untrusted networks.</p>',
                        names: [
                            'inPlace_1_4_1',
                            'notApplicable_1_4_1',
                            'notTested_1_4_1',
                            'notInPlace_1_4_1',
                            'compensatingControl_1_4_1',
                            'customizedApproach_1_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.4.1.a Examine configuration standards and network diagrams to verify that NSCs are defined between trusted and untrusted networks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration standards examined for this testing procedure.',
                                    name: 'configStandards_1_4_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all network diagrams examined for this testing procedure.',
                                    name: 'networkDiagrams_1_4_1',
                                },
                            },
                            {
                                td: {
                                    0: '1.4.1.b Examine network configurations to verify that NSCs are in place between trusted and untrusted networks, in accordance with the documented configuration standards and network diagrams.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network configurations examined for this testing procedure.',
                                    name: 'networkConfig_1_4_1',
                                },
                            },
                        ],
                    },
                    '1.4.2': {
                        title: '<p>1.4.2 Inbound traffic from untrusted networks to trusted networks is restricted to:\n                    <ul>\n                        <li>Communications with system components that are authorized to provide publicly accessible services, protocols, and ports.</li>\n                        <li>Stateful responses to communications initiated by system components in a trusted network.</li>\n                        <li>All other traffic is denied.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_1_4_2',
                            'notApplicable_1_4_2',
                            'notTested_1_4_2',
                            'notInPlace_1_4_2',
                            'compensatingControl_1_4_2',
                            'customizedApproach_1_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.4.2 Examine vendor documentation and configurations of NSCs to verify that inbound traffic from untrusted networks to trusted networks is restricted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDoc_1_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configExamined_1_4_2',
                                },
                            },
                        ],
                    },
                    '1.4.3': {
                        title: '<p>1.4.3 Anti-spoofing measures are implemented to detect and block forged source IP addresses from entering the trusted network.</p>',
                        names: [
                            'inPlace_1_4_3',
                            'notApplicable_1_4_3',
                            'notTested_1_4_3',
                            'notInPlace_1_4_3',
                            'compensatingControl_1_4_3',
                            'customizedApproach_1_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.4.3 Examine vendor documentation and configurations for NSCs to verify that anti-spoofing measures are implemented to detect and block forged source IP addresses from entering the trusted network.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentation_1_4_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsExamined_1_4_3',
                                },
                            },
                        ],
                    },
                    '1.4.4': {
                        title: '<p>1.4.4 System components that store cardholder data are not directly accessible from untrusted networks.</p>',
                        names: [
                            'inPlace_1_4_4',
                            'notApplicable_1_4_4',
                            'notTested_1_4_4',
                            'notInPlace_1_4_4',
                            'compensatingControl_1_4_4',
                            'customizedApproach_1_4_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_4_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.4.4.a Examine the data-flow diagram and network diagram to verify that it is documented that system components storing cardholder data are not directly accessible from the untrusted networks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data-flow diagrams examined for this testing procedure.',
                                    name: 'dataFlowDiagram_1_4_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all network diagrams examined for this testing procedure.',
                                    name: 'networkDiagram_1_4_4',
                                },
                            },
                            {
                                td: {
                                    0: '1.4.4.b Examine configurations of NSCs to verify that controls are implemented such that system components storing cardholder data are not directly accessible from untrusted networks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsExamined_1_4_4',
                                },
                            },
                        ],
                    },
                    '1.4.5': {
                        title: '<p>1.4.5 The disclosure of internal IP addresses and routing information is limited to only authorized parties.</p>',
                        names: [
                            'inPlace_1_4_5',
                            'notApplicable_1_4_5',
                            'notTested_1_4_5',
                            'notInPlace_1_4_5',
                            'compensatingControl_1_4_5',
                            'customizedApproach_1_4_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_4_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.4.5.a Examine configurations of NSCs to verify that the disclosure of internal IP addresses and routing information is limited to only authorized parties.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsExamined_1_4_5_a',
                                },
                            },
                            {
                                td: {
                                    0: '1.4.5.b Interview personnel and examine documentation to verify that controls are implemented such that any disclosure of internal IP addresses and routing information is limited to only authorized parties.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_1_4_5_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_1_4_5_b',
                                },
                            },
                        ],
                    },
                },
            },
            1.5: {
                title: '<p>1.5 Risks to the CDE from computing devices that are able to connect to both untrusted networks and the CDE are mitigated.</p>',
                pciDss: {
                    '1.5.1': {
                        title: '<p>1.5.1 Security controls are implemented on any computing devices, including company- and employee-owned devices, that connect to both untrusted networks (including the Internet) and the CDE as follows: \n                    <ul>\n                        <li>Specific configuration settings are defined to prevent threats being introduced into the entity’s network.</li>\n                        <li>Security controls are actively running.</li>\n                        <li>Security controls are not alterable by users of the computing devices unless specifically documented and authorized by management on a case-by-case basis for a limited period.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_1_5_1',
                            'notApplicable_1_5_1',
                            'notTested_1_5_1',
                            'notInPlace_1_5_1',
                            'compensatingControl_1_5_1',
                            'customizedApproach_1_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_1_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '1.5.1.a Examine policies and configuration standards and interview personnel to verify security controls for computing devices that connect to both untrusted networks, and the CDE, are implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies examined for this testing procedure.',
                                    name: 'policiesExamined_1_5_1_a',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configuration standards examined for this testing procedure.',
                                    name: 'configurationStandardsExamined_1_5_1_a',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_1_5_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '1.5.1.b Examine configuration settings on computing devices that connect to both untrusted networks and the CDE to verify settings are implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_1_5_1_b',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_2: {
        title: 'Requirement 2: Apply Secure Configurations to All System Components',
        descriptions: {
            2.1: {
                title: '<p>2.1 Processes and mechanisms for applying secure configurations to all system components are defined and understood.</p>',
                pciDss: {
                    '2.1.1': {
                        title: '<p>2.1.1 All security policies and operational procedures that are identified in Requirement 2 are: \n                    <ul>\n                        <li>Documented.</li>\n                        <li>Kept up to date.</li>\n                        <li>In use.</li>\n                        <li>Known to all affected parties.</li>\n                    </ul>\n                </p>',
                        names: [
                            'inPlace_2_1_1',
                            'notApplicable_2_1_1',
                            'notTested_2_1_1',
                            'notInPlace_2_1_1',
                            'compensatingControl_2_1_1',
                            'customizedApproach_2_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 2 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_2_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_2_1_1',
                                },
                            },
                        ],
                    },
                    '2.1.2': {
                        title: '<p>2.1.2 Roles and responsibilities for performing activities in Requirement 2 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_2_1_2',
                            'notApplicable_2_1_2',
                            'notTested_2_1_2',
                            'notInPlace_2_1_2',
                            'compensatingControl_2_1_2',
                            'customizedApproach_2_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 2 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_2_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '2.1.2.b Interview personnel with responsibility for performing activities in Requirement 2 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_2_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            2.2: {
                title: '<p>2.2 System components are configured and managed securely.</p>',
                pciDss: {
                    '2.2.1': {
                        title: '<p>2.2.1 Configuration standards are developed, implemented, and maintained to:</p>\n                <ul>\n                    <li>Cover all system components.</li>\n                    <li>Address all known security vulnerabilities.</li>\n                    <li>Be consistent with industry-accepted system hardening standards or vendor hardening recommendations.</li>\n                    <li>Be updated as new vulnerability issues are identified, as defined in Requirement 6.3.1.</li>\n                    <li>Be applied when new systems are configured and verified as in place before or immediately after a system component is connected to a production environment.</li>\n                </ul>',
                        names: [
                            'inPlace_2_2_1',
                            'notApplicable_2_2_1',
                            'notTested_2_2_1',
                            'notInPlace_2_2_1',
                            'compensatingControl_2_2_1',
                            'customizedApproach_2_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.1.a Examine system configuration standards to verify they define processes that include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.1.b Examine policies and procedures and interview personnel to verify that system configuration standards are updated as new vulnerability issues are identified, as defined in Requirement 6.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProcedures_2_2_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_2_2_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.1.c Examine configuration settings and interview personnel to verify that system configuration standards are applied when new systems are configured and verified as being in place before or immediately after a system component is connected to a production environment.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configSettings_2_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_2_2_1_c',
                                },
                            },
                        ],
                    },
                    '2.2.2': {
                        title: '<p>2.2.2 Vendor default accounts are managed as follows:</p>\n                <ul>\n                    <li>If the vendor default account(s) will be used, the default password is changed per Requirement 8.3.6.</li>\n                    <li>If the vendor default account(s) will not be used, the account is removed or disabled.</li>\n                </ul>',
                        names: [
                            'inPlace_2_2_2',
                            'notApplicable_2_2_2',
                            'notTested_2_2_2',
                            'notInPlace_2_2_2',
                            'compensatingControl_2_2_2',
                            'customizedApproach_2_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.2.a Examine system configuration standards to verify they include managing vendor default accounts in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.2.b Examine vendor documentation and observe a system administrator logging on using vendor default accounts to verify accounts are implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentation_2_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations conducted for this testing procedure.',
                                    name: 'observations_2_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.2.c Examine configuration files and interview personnel to verify that all vendor default accounts that will not be used are removed or disabled.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration files examined for this testing procedure.',
                                    name: 'configFiles_2_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_2_2_2',
                                },
                            },
                        ],
                    },
                    '2.2.3': {
                        title: '<p>2.2.3 Primary functions requiring different security levels are managed as follows:</p>\n                <ul>\n                    <li>Only one primary function exists on a system component,</li>\n                    <li>OR</li>\n                    <li>Primary functions with differing security levels that exist on the same system component are isolated from each other,</li>\n                    <li>OR</li>\n                    <li>Primary functions with differing security levels on the same system component are all secured to the level required by the function with the highest security need.</li>\n                </ul>',
                        names: [
                            'inPlace_2_2_3',
                            'notApplicable_2_2_3',
                            'notTested_2_2_3',
                            'notInPlace_2_2_3',
                            'compensatingControl_2_2_3',
                            'customizedApproach_2_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.3.a Examine system configuration standards to verify they include managing primary functions requiring different security levels as specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.3.b Examine system configurations to verify that primary functions requiring different security levels are managed per one of the ways specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurations_2_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.3.c Where virtualization technologies are used, examine the system configurations to verify that system functions requiring different security levels are managed in one of the following ways: \n                <ul>\n                    <li>Functions with differing security needs do not co-exist on the same system component.</li>\n                    <li>Functions with differing security needs that exist on the same system component are isolated from each other.</li>\n                    <li>Functions with differing security needs on the same system component are all secured to the level required by the function with the highest security need.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'virtualizationTech_2_2_3',
                                },
                            },
                        ],
                    },
                    '2.2.4': {
                        title: '<p>2.2.4 Only necessary services, protocols, daemons, and functions are enabled, and all unnecessary functionality is removed or disabled.</p>',
                        names: [
                            'inPlace_2_2_4',
                            'notApplicable_2_2_4',
                            'notTested_2_2_4',
                            'notInPlace_2_2_4',
                            'compensatingControl_2_2_4',
                            'customizedApproach_2_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.4.a Examine system configuration standards to verify necessary services, protocols, daemons and functions are identified and documented.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_4',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.4.b Examine system configurations to verify the following:\n                <ul>\n                    <li>All unnecessary functionality is removed or disabled.</li>\n                    <li>Only required functionality, as documented in the configuration standards, is enabled.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurations_2_2_4',
                                },
                            },
                        ],
                    },
                    '2.2.5': {
                        title: '<p>2.2.5 If any insecure services, protocols, or daemons are present:</p>\n                <ul>\n                    <li>Business justification is documented.</li>\n                    <li>Additional security features are documented and implemented that reduce the risk of using insecure services, protocols, or daemons.</li>\n                </ul>',
                        names: [
                            'inPlace_2_2_5',
                            'notApplicable_2_2_5',
                            'notTested_2_2_5',
                            'notInPlace_2_2_5',
                            'compensatingControl_2_2_5',
                            'customizedApproach_2_2_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.5.a If any insecure services, protocols, or daemons are present, examine system configuration standards and interview personnel to verify they are managed and implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_2_2_5',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.5.b If any insecure services, protocols, or daemons are present, examine configuration settings to verify that additional security features are implemented to reduce the risk of using insecure services, daemons, and protocols.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettings_2_2_5',
                                },
                            },
                        ],
                    },
                    '2.2.6': {
                        title: '<p>2.2.6 System security parameters are configured to prevent misuse.</p>',
                        names: [
                            'inPlace_2_2_6',
                            'notApplicable_2_2_6',
                            'notTested_2_2_6',
                            'notInPlace_2_2_6',
                            'compensatingControl_2_2_6',
                            'customizedApproach_2_2_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.6.a Examine system configuration standards to verify they include configuring system security parameters to prevent misuse.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_6',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.6.b Interview system administrators and/or security managers to verify they have knowledge of common security parameter settings for system components.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_2_2_6',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.6.c Examine system configurations to verify that common security parameters are set appropriately and in accordance with the system configuration standards.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'configurationSettings_2_2_6',
                                },
                            },
                        ],
                    },
                    '2.2.7': {
                        title: '<p>2.2.7 All non-console administrative access is encrypted using strong cryptography.</p>',
                        names: [
                            'inPlace_2_2_7',
                            'notApplicable_2_2_7',
                            'notTested_2_2_7',
                            'notInPlace_2_2_7',
                            'compensatingControl_2_2_7',
                            'customizedApproach_2_2_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_2_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.2.7.a Examine system configuration standards to verify they include encrypting all non-console administrative access using strong cryptography.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration standards examined for this testing procedure.',
                                    name: 'configStandards_2_2_7a',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.7.b Observe an administrator log on to system components and examine system configurations to verify that non-console administrative access is managed in accordance with this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of administrator log on(s) for this testing procedure.',
                                    name: 'observations_2_2_7b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'system_configurations_2_2_7b',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.7.c Examine settings for system components and authentication services to verify that insecure remote login services are not available for non-console administrative access.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all settings for system components and authentication services examined for this testing procedure.',
                                    name: 'configSettings_2_2_7c',
                                },
                            },
                            {
                                td: {
                                    0: '2.2.7.d Examine vendor documentation and interview personnel to verify that strong cryptography for the technology in use is implemented according to industry best practices and/or vendor recommendations.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocs_2_2_7d',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_2_2_7b',
                                },
                            },
                        ],
                    },
                },
            },
            2.3: {
                title: '<p>2.3 Wireless environments are configured and managed securely.</p>',
                pciDss: {
                    '2.3.1': {
                        title: '<p>2.3.1 For wireless environments connected to the CDE or transmitting account data, all wireless vendor defaults are changed at installation or are confirmed to be secure, including but not limited to:</p>\n                <ul>\n                    <li>Default wireless encryption keys.</li>\n                    <li>Passwords on wireless access points.</li>\n                    <li>SNMP defaults.</li>\n                    <li>Any other security-related wireless vendor defaults.</li>\n                </ul>',
                        names: [
                            'inPlace_2_3_1',
                            'notApplicable_2_3_1',
                            'notTested_2_3_1',
                            'notInPlace_2_3_1',
                            'compensatingControl_2_3_1',
                            'customizedApproach_2_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.3.1.a Examine policies and procedures and interview responsible personnel to verify that processes are defined for wireless vendor defaults to either change them upon installation or to confirm them to be secure in accordance with all elements of this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesAndProcedures_2_3_1a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_2_3_1a',
                                },
                            },
                            {
                                td: {
                                    0: '<p>2.3.1.b Examine vendor documentation and observe a system administrator logging into wireless devices to verify:</p>\n                        <ul>\n                    <li>SNMP defaults are not used.</li>\n                    <li>Default passwords/passphrases on wireless access points are not used.</li>\n                 </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocs_2_3_1b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the observations of administrator log in(s) for this testing procedure.',
                                    name: 'observationsAdministratorLog_2_3_1b',
                                },
                            },
                            {
                                td: {
                                    0: '2.3.1.c Examine vendor documentation and wireless configuration settings to verify other security-related wireless vendor defaults were changed, if applicable.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'configSettings_2_3_1c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all wireless configuration settings examined for this testing procedure.',
                                    name: 'wirelessConfigurationSettings_2_3_1c',
                                },
                            },
                        ],
                    },
                    '2.3.2': {
                        title: '<p>2.3.2 For wireless environments connected to the CDE or transmitting account data, wireless encryption keys are changed as follows:</p>\n                <ul>\n                    <li>Whenever personnel with knowledge of the key leave the company or the role for which the knowledge was necessary.</li>\n                    <li>Whenever a key is suspected of or known to be compromised.</li>\n                </ul>',
                        names: [
                            'inPlace_2_3_2',
                            'notApplicable_2_3_2',
                            'notTested_2_3_2',
                            'notInPlace_2_3_2',
                            'compensatingControl_2_3_2',
                            'customizedApproach_2_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_2_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '2.3.2 Interview responsible personnel and examine key-management documentation to verify that wireless encryption keys are changed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_2_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all key-management documentation examined for this testing procedure.',
                                    name: 'keyManagementDocs_2_3_2',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_3: {
        title: 'Requirement 3: Protect Stored Account Data',
        descriptions: {
            3.1: {
                title: '<p>3.1 Processes and mechanisms for protecting stored account data are defined and understood.</p>',
                pciDss: {
                    '3.1.1': {
                        title: '<p>3.1.1 All security policies and operational procedures that are identified in Requirement 3 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_3_1_1',
                            'notApplicable_3_1_1',
                            'notTested_3_1_1',
                            'notInPlace_3_1_1',
                            'compensatingControl_3_1_1',
                            'customizedApproach_3_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 3 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_3_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_3_1_1',
                                },
                            },
                        ],
                    },
                    '3.1.2': {
                        title: '<p>3.1.2 Roles and responsibilities for performing activities in Requirement 3 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_3_1_2',
                            'notApplicable_3_1_2',
                            'notTested_3_1_2',
                            'notInPlace_3_1_2',
                            'compensatingControl_3_1_2',
                            'customizedApproach_3_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.1.2.a Examine documentation to verify that descriptions of roles and responsibilities performing activities in Requirement 3 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_3_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.1.2.b Interview personnel with responsibility for performing activities in Requirement 3 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_3_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            3.2: {
                title: '<p>3.2 Storage of account data is kept to a minimum.</p>',
                pciDss: {
                    '3.2.1': {
                        title: '<p>3.2.1 Account data storage is kept to a minimum through implementation of data retention and disposal policies, procedures, and processes that include at least the following:</p>\n                <ul>\n                    <li>Coverage for all locations of stored account data.</li>\n                    <li>Coverage for any sensitive authentication data (SAD) stored prior to completion of authorization. \n                    <b>Note:</b> This is a best practice until 31 March 2025, after which it will be required.</li>\n                    <li>Limiting data storage amount and retention time to what is required for legal, regulatory, or business purposes.</li>\n                    <li>Specific retention requirements that define retention period length and include documented business justification.</li>\n                    <li>Processes for secure deletion or rendering data unrecoverable when no longer needed.</li>\n                    <li>A process for verifying, at least every three months, that data exceeding the retention period is securely deleted or rendered unrecoverable.</li>\n                </ul>',
                        names: [
                            'inPlace_3_2_1',
                            'notApplicable_3_2_1',
                            'notTested_3_2_1',
                            'notInPlace_3_2_1',
                            'compensatingControl_3_2_1',
                            'customizedApproach_3_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions. \n                        *Attach documentation (Appendix C, Appendix E, or both) as applicable.\n                    </i>',
                            name: 'customizedApproach_3_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.2.1.a Examine the data retention and disposal policies, procedures, and processes and interview personnel to verify processes include all required elements.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies, procedures, and processes examined.',
                                    name: 'documentationEvidence_3_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_3_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.2.1.b Examine files and system records to verify that data storage amount and retention time do not exceed policy requirements.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for files and records examined.',
                                    name: 'filesEvidence_3_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.2.1.c Observe the mechanisms used to render account data unrecoverable to ensure data cannot be recovered.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for observations of these mechanisms.',
                                    name: 'mechanismsEvidence_3_2_1',
                                },
                            },
                        ],
                    },
                },
            },
            3.3: {
                title: '<p>3.3 Sensitive authentication data (SAD) is not stored after authorization.</p>',
                pciDss: {
                    '3.3.1': {
                        title: '<p>3.3.1 SAD (Sensitive Authentication Data) is not stored after authorization, even if encrypted. All sensitive authentication data received is rendered unrecoverable upon completion of the authorization process.</p>',
                        names: ['inPlace_3_3_1', 'notApplicable_3_3_1', 'notTested_3_3_1', 'notInPlace_3_3_1', 'compensatingControl_3_3_1'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach Appendix C if applicable to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.1.a If SAD is received, examine documented policies, procedures, and system configurations to verify that SAD is not stored after authorization.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined.',
                                    name: 'documentationEvidence_3_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurations_3_3_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.3.1.b If SAD is received, examine the documented procedures and observe the secure data deletion processes to verify data is rendered unrecoverable after authorization.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined.',
                                    name: 'proceduresEvidence_3_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the observations of secure data deletion processes.',
                                    name: 'deletionProcessEvidence_3_3_1',
                                },
                            },
                        ],
                    },
                    '3.3.1.1': {
                        title: '<p>3.3.1.1 The full contents of any track are not stored upon completion of the authorization process.</p>',
                        names: ['inPlace_3_3_1_1', 'notApplicable_3_3_1_1', 'notTested_3_3_1_1', 'notInPlace_3_3_1_1', 'compensatingControl_3_3_1_1'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach Appendix C if applicable to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.1.1 Examine data sources to verify that the full contents of any track are not stored upon completion of the authorization process.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data sources examined for this testing procedure.',
                                    name: 'dataSourcesEvidence_3_3_1_1',
                                },
                            },
                        ],
                    },
                    '3.3.1.2': {
                        title: '<p>3.3.1.2 The card verification code is not stored upon completion of the authorization process.</p>',
                        names: ['inPlace_3_3_1_2', 'notApplicable_3_3_1_2', 'notTested_3_3_1_2', 'notInPlace_3_3_1_2', 'compensatingControl_3_3_1_2'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach Appendix C if applicable to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.1.2 Examine data sources to verify that the card verification code is not stored upon completion of the authorization process.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data sources examined for this testing procedure.',
                                    name: 'dataSourcesEvidence_3_3_1_2',
                                },
                            },
                        ],
                    },
                    '3.3.1.3': {
                        title: '<p>3.3.1.3 The personal identification number (PIN) and the PIN block are not stored upon completion of the authorization process.</p>',
                        names: ['inPlace_3_3_1_3', 'notApplicable_3_3_1_3', 'notTested_3_3_1_3', 'notInPlace_3_3_1_3', 'compensatingControl_3_3_1_3'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach Appendix C if applicable to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.1.3 Examine data sources to verify that PINs and PIN blocks are not stored upon completion of the authorization process.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data sources examined for this testing procedure.',
                                    name: 'dataSourcesEvidence_3_3_1_3',
                                },
                            },
                        ],
                    },
                    '3.3.2': {
                        title: '<p>3.3.2 SAD that is stored electronically prior to completion of authorization is encrypted using strong cryptography.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: ['inPlace_3_3_2', 'notApplicable_3_3_2', 'notTested_3_3_2', 'notInPlace_3_3_2', 'compensatingControl_3_3_2'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach Appendix C if applicable to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.2 Examine data stores, system configurations, and/or vendor documentation to verify that all SAD stored electronically prior to completion of authorization is encrypted using strong cryptography.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data stores examined for this testing procedure.',
                                    name: 'dataStoresEvidence_3_3_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_3_3_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_3_3_2',
                                },
                            },
                        ],
                    },
                    '3.3.3': {
                        title: '<p>3.3.3 Additional requirement for issuers and companies that support issuing services and store sensitive authentication data: Any storage of sensitive authentication data is:</p>\n                <ul>\n                    <li>Limited to that which is needed for a legitimate issuing business need and is secured.</li>\n                    <li>Encrypted using strong cryptography. <b>This bullet is a best practice until 31 March 2025, after which it will be required as part of Requirement 3.3.3 and must be fully considered during a PCI DSS assessment.</b></li>\n                </ul>',
                        names: [
                            'inPlace_3_3_3',
                            'notApplicable_3_3_3',
                            'notTested_3_3_3',
                            'notInPlace_3_3_3',
                            'compensatingControl_3_3_3',
                            'customizedApproach_3_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.3.3.a Additional testing procedure for issuers and companies that support issuing services and store sensitive authentication data: Examine documented policies and interview personnel to verify there is a documented business justification for the storage of sensitive authentication data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies examined for this testing procedure.',
                                    name: 'documentedPoliciesEvidence_3_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_3_3_3',
                                },
                            },
                            {
                                td: {
                                    0: '3.3.3.b Additional testing procedure for issuers and companies that support issuing services and store sensitive authentication data: Examine data stores and system configurations to verify that the sensitive authentication data is stored securely.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data stores examined for this testing procedure.',
                                    name: 'dataStoresEvidence_3_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_3_3_3',
                                },
                            },
                        ],
                    },
                },
            },
            3.4: {
                title: '<p>3.4 Access to displays of full PAN and ability to copy PAN are restricted.</p>',
                pciDss: {
                    '3.4.1': {
                        title: '<p>3.4.1 PAN is masked when displayed (the BIN and last four digits are the maximum number of digits to be displayed), such that only personnel with a legitimate business need can see more than the BIN and last four digits of the PAN.</p>',
                        names: [
                            'inPlace_3_4_1',
                            'notApplicable_3_4_1',
                            'notTested_3_4_1',
                            'notInPlace_3_4_1',
                            'compensatingControl_3_4_1',
                            'customizedApproach_3_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>3.4.1.a Examine documented policies and procedures for masking the display of PANs to verify:</p> \n                        <ul>\n                            <li>A list of roles that need access to more than the BIN and last four digits of the PAN (includes full PAN) is documented, together with a legitimate business need for each role to have such access.</li>\n                            <li>PAN is masked when displayed such that only personnel with a legitimate business need can see more than the BIN and last four digits of the PAN.</li>\n                            <li>All roles not specifically authorized to see the full PAN must only see masked PANs.</li>\n                        </ul>\n                        ',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'documentedPoliciesEvidence_3_4_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.4.1.b Examine system configurations to verify that full PAN is only displayed for roles with a documented business need, and that PAN is masked for all other requests.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_3_4_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.4.1.c Examine displays of PAN (for example, on screen, on paper receipts) to verify that PANs are masked when displayed, and that only those with a legitimate business need are able to see more than the BIN and/or last four digits of the PAN.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all displays of PAN examined for this testing procedure.',
                                    name: 'panDisplaysEvidence_3_4_1',
                                },
                            },
                        ],
                    },
                    '3.4.2': {
                        title: '<p>3.4.2 When using remote-access technologies, technical controls prevent copy and/or relocation of PAN for all personnel, except for those with documented, explicit authorization and a legitimate, defined business need.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_3_4_2',
                            'notApplicable_3_4_2',
                            'notTested_3_4_2',
                            'notInPlace_3_4_2',
                            'compensatingControl_3_4_2',
                            'customizedApproach_3_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.4.2.a Examine documented policies and procedures and documented evidence for technical controls that prevent copy and/or relocation of PAN when using remote-access technologies onto local hard drives or removable electronic media to verify the following:\n                            <ul>\n                                <li>Technical controls prevent all personnel not specifically authorized from copying and/or relocating PAN.</li>\n                                <li>A list of personnel with permission to copy and/or relocate PAN is maintained, together with the documented, explicit authorization and legitimate, defined business need.</li>\n                            </ul>\n                        ',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'documentedPoliciesEvidence_3_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documented evidence for technical controls examined for this testing procedure.',
                                    name: 'technicalControlsEvidence_3_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.4.2.b Examine configurations for remote-access technologies to verify that technical controls to prevent copy and/or relocation of PAN for all personnel, unless explicitly authorized.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'remoteAccessConfigurationsEvidence_3_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.4.2.c Observe processes and interview personnel to verify that only personnel with documented, explicit authorization and a legitimate, defined business need have permission to copy and/or relocate PAN when using remote-access technologies.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations conducted for this testing procedure.',
                                    name: 'observationsEvidence_3_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_3_4_2',
                                },
                            },
                        ],
                    },
                },
            },
            3.5: {
                title: '<p>3.5 Primary account number (PAN) is secured wherever it is stored.</p>',
                pciDss: {
                    '3.5.1': {
                        title: '<p>3.5.1 PAN is rendered unreadable anywhere it is stored by using any of the following approaches:</p>\n                <ul>\n                    <li>One-way hashes based on strong cryptography of the entire PAN.</li>\n                    <li>Truncation (hashing cannot be used to replace the truncated segment of PAN).</li>\n                    <li>If hashed and truncated versions of the same PAN, or different truncation formats of the same PAN, are present in an environment, additional controls are in place such that the different versions cannot be correlated to reconstruct the original PAN.</li>\n                    <li>Index tokens.</li>\n                    <li>Strong cryptography with associated key-management processes and procedures.</li>\n                </ul>',
                        names: [
                            'inPlace_3_5_1',
                            'notApplicable_3_5_1',
                            'notTested_3_5_1',
                            'notInPlace_3_5_1',
                            'compensatingControl_3_5_1',
                            'customizedApproach_3_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.5.1.a Examine documentation about the system used to render PAN unreadable, including the vendor, type of system/process, and the encryption algorithms (if applicable) to verify that the PAN is rendered unreadable using any of the methods specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_3_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.b Examine data repositories and audit logs, including payment application logs, to verify the PAN is rendered unreadable using any of the methods specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data repositories examined for this testing procedure.',
                                    name: 'dataRepositoriesEvidence_3_5_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'auditLogsEvidence_3_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.c If hashed and truncated versions of the same PAN are present in the environment, examine implemented controls to verify that the hashed and truncated versions cannot be correlated to reconstruct the original PAN.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all implemented controls examined for this testing procedure.',
                                    name: 'implementedControlsEvidence_3_5_1',
                                },
                            },
                        ],
                    },
                    '3.5.1.1': {
                        title: '<p>3.5.1.1 Hashes used to render PAN unreadable (per the first bullet of Requirement 3.5.1) are keyed cryptographic hashes of the entire PAN, with associated key-management processes and procedures in accordance with Requirements 3.6 and 3.7.</p>\n                <p><b>Note:</b> This requirement is considered a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_3_5_1_1',
                            'notApplicable_3_5_1_1',
                            'notTested_3_5_1_1',
                            'notInPlace_3_5_1_1',
                            'compensatingControl_3_5_1_1',
                            'customizedApproach_3_5_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_5_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.5.1.1.a Examine documentation about the hashing method used to render PAN unreadable, including the vendor, type of system/process, and the encryption algorithms (as applicable) to verify that the hashing method results in keyed cryptographic hashes of the entire PAN, with associated key management processes and procedures.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'hashingMethodDocumentationEvidence_3_5_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.1.b Examine documentation about the key management procedures and processes associated with the keyed cryptographic hashes to verify keys are managed in accordance with Requirements 3.6 and 3.7.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'keyManagementDocumentationEvidence_3_5_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.1.c Examine data repositories to verify the PAN is rendered unreadable.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data repositories examined for this testing procedure.',
                                    name: 'dataRepositoriesEvidence_3_5_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.1.d Examine audit logs, including payment application logs, to verify the PAN is rendered unreadable.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'auditLogsEvidence_3_5_1_1',
                                },
                            },
                        ],
                    },
                    '3.5.1.2': {
                        title: '<p>3.5.1.2 If disk-level or partition-level encryption (rather than file-, column-, or field-level database encryption) is used to render PAN unreadable, it is implemented only as follows:</p>\n                <ul>\n                    <li>On removable electronic media</li>\n                    <li>If used for non-removable electronic media, PAN is also rendered unreadable via another mechanism that meets Requirement 3.5.1.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is considered a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_3_5_1_2',
                            'notApplicable_3_5_1_2',
                            'notTested_3_5_1_2',
                            'notInPlace_3_5_1_2',
                            'compensatingControl_3_5_1_2',
                            'customizedApproach_3_5_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_5_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>3.5.1.2.a Examine encryption processes to verify that, if disk-level or partition-level encryption is used to render PAN unreadable, it is implemented only as follows: </p>\n                    <ul>\n                        <li>On removable electronic media,</li>\n                    </ul>\n                    <p>OR</p>\n                    <ul>\n                        <li>If used for non-removable electronic media, examine encryption processes used to verify that PAN is also rendered unreadable via another method that meets Requirement 3.5.1.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all encryption processes examined for this testing procedure.',
                                    name: 'encryptionProcessesEvidence_3_5_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.2.b Examine configurations and/or vendor documentation and observe encryption processes to verify the system is configured according to vendor documentation such that the disk or the partition is rendered unreadable.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_3_5_1_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_3_5_1_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the observations of the encryption processes for this testing procedure.',
                                    name: 'observationsEvidence_3_5_1_2',
                                },
                            },
                        ],
                    },
                    '3.5.1.3': {
                        title: '<p>3.5.1.3 If disk-level or partition-level encryption is used (rather than file-, column-, or field-level database encryption) to render PAN unreadable, it is managed as follows:</p>\n                <ul>\n                    <li>Logical access is managed separately and independently of native operating system authentication and access control mechanisms.</li>\n                    <li>Decryption keys are not associated with user accounts.</li>\n                    <li>Authentication factors (passwords, passphrases, or cryptographic keys) that allow access to unencrypted data are stored securely.</li>\n                </ul>',
                        names: [
                            'inPlace_3_5_1_3',
                            'notApplicable_3_5_1_3',
                            'notTested_3_5_1_3',
                            'notInPlace_3_5_1_3',
                            'compensatingControl_3_5_1_3',
                            'customizedApproach_3_5_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_5_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.5.1.3.a If disk-level or partition-level encryption is used to render PAN unreadable, examine the system configuration and observe the authentication process to verify that logical access is implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_3_5_1_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of the authentication process for this testing procedure.',
                                    name: 'authenticationProcessEvidence_3_5_1_3',
                                },
                            },
                            {
                                td: {
                                    0: '3.5.1.3.b Examine files containing authentication factors (passwords, passphrases, or cryptographic keys) and interview personnel to verify that authentication factors that allow access to unencrypted data are stored securely and are independent from the native operating system’s authentication and access control methods.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all files containing authentication factors examined for this testing procedure.',
                                    name: 'authenticationFactorsEvidence_3_5_1_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_3_5_1_3',
                                },
                            },
                        ],
                    },
                },
            },
            3.6: {
                title: '<p>3.6 Cryptographic keys used to protect stored account data are secured.</p>',
                pciDss: {
                    '3.6.1': {
                        title: '<p>3.6.1 Procedures are defined and implemented to protect cryptographic keys used to protect stored account data against disclosure and misuse that include:</p>\n                <ul>\n                    <li>Access to keys is restricted to the fewest number of custodians necessary.</li>\n                    <li>Key-encrypting keys are at least as strong as the data-encrypting keys they protect.</li>\n                    <li>Key-encrypting keys are stored separately from data-encrypting keys.</li>\n                    <li>Keys are stored securely in the fewest possible locations and forms.</li>\n                </ul>',
                        names: [
                            'inPlace_3_6_1',
                            'notApplicable_3_6_1',
                            'notTested_3_6_1',
                            'notInPlace_3_6_1',
                            'compensatingControl_3_6_1',
                            'customizedApproach_3_6_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_6_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.6.1 Examine documented key-management policies and procedures to verify that processes to protect cryptographic keys used to protect stored account data against disclosure and misuse are defined to include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'keyManagementDocumentationEvidence_3_6_1',
                                },
                            },
                        ],
                    },
                    '3.6.1.1': {
                        title: '<p>3.6.1.1 Additional requirement for service providers only: A documented description of the cryptographic architecture is maintained that includes:</p>\n                <ul>\n                    <li>Details of all algorithms, protocols, and keys used for the protection of stored account data, including key strength and expiry date.</li>\n                    <li>Preventing the use of the same cryptographic keys in production and test environments. \n                        <br/><b>Note:</b> This bullet is a best practice until 31 March 2025, after which it will be required as part of Requirement 3.6.1 and must be fully considered during a PCI DSS assessment.\n                    </li>\n                    <li>Description of the key usage for each key.</li>\n                    <li>Inventory of any hardware security modules (HSMs), key management systems (KMS), and other secure cryptographic devices (SCDs) used for key management, including type and location of devices, to support meeting Requirement 12.3.4.</li>\n                </ul>',
                        names: [
                            'inPlace_3_6_1_1',
                            'notApplicable_3_6_1_1',
                            'notTested_3_6_1_1',
                            'notInPlace_3_6_1_1',
                            'compensatingControl_3_6_1_1',
                            'customizedApproach_3_6_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_6_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.6.1.1 Additional testing procedure for service provider assessments only: Interview responsible personnel and examine documentation to verify that a document exists to describe the cryptographic architecture that includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_3_6_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_3_6_1_1',
                                },
                            },
                        ],
                    },
                    '3.6.1.2': {
                        title: '<p>3.6.1.2 Secret and private keys used to protect stored account data are stored in one (or more) of the following forms at all times:</p>\n                <ul>\n                    <li>Encrypted with a key-encrypting key that is at least as strong as the data-encrypting key, and that is stored separately from the data-encrypting key.</li>\n                    <li>Within a secure cryptographic device (SCD), such as a hardware security module (HSM) or PTS-approved point-of-interaction device.</li>\n                    <li>As at least two full-length key components or key shares, in accordance with an industry-accepted method.</li>\n                </ul>',
                        names: [
                            'inPlace_3_6_1_2',
                            'notApplicable_3_6_1_2',
                            'notTested_3_6_1_2',
                            'notInPlace_3_6_1_2',
                            'compensatingControl_3_6_1_2',
                            'customizedApproach_3_6_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_6_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.6.1.2.a Examine documented procedures to verify it is defined that cryptographic keys used to encrypt/decrypt stored account data must exist only in one (or more) of the forms specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined for this testing procedure.',
                                    name: 'documentedProceduresEvidence_3_6_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.6.1.2.b Examine system configurations and key storage locations to verify that cryptographic keys used to encrypt/decrypt stored account data exist in one (or more) of the forms specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_3_6_1_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all key storage locations examined for this testing procedure.',
                                    name: 'keyStorageLocationsEvidence_3_6_1_2',
                                },
                            },
                            {
                                td: {
                                    0: ' <p>3.6.1.2.c Wherever key-encrypting keys are used, examine system configurations and key storage locations to verify:</p>\n                    <ul>\n                            \n                        <li>Key-encrypting keys are at least as strong as the data-encrypting keys they protect.</li>\n                        <li>Key-encrypting keys are stored separately from data-encrypting keys.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'keyEncryptingKeysConfigurationsEvidence_3_6_1_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all key storage locations examined for this testing procedure.',
                                    name: 'keyEncryptingKeysStorageLocationsEvidence_3_6_1_2',
                                },
                            },
                        ],
                    },
                    '3.6.1.3': {
                        title: '<p>3.6.1.3 Access to cleartext cryptographic key components is restricted to the fewest number of custodians necessary.</p>',
                        names: [
                            'inPlace_3_6_1_3',
                            'notApplicable_3_6_1_3',
                            'notTested_3_6_1_3',
                            'notInPlace_3_6_1_3',
                            'compensatingControl_3_6_1_3',
                            'customizedApproach_3_6_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_6_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.6.1.3 Examine user access lists to verify that access to cleartext cryptographic key components is restricted to the fewest number of custodians necessary.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all user access lists examined for this testing procedure.',
                                    name: 'userAccessListsEvidence_3_6_1_3',
                                },
                            },
                        ],
                    },
                    '3.6.1.4': {
                        title: '<p>3.6.1.4 Cryptographic keys are stored in the fewest possible locations.</p>',
                        names: [
                            'inPlace_3_6_1_4',
                            'notApplicable_3_6_1_4',
                            'notTested_3_6_1_4',
                            'notInPlace_3_6_1_4',
                            'compensatingControl_3_6_1_4',
                            'customizedApproach_3_6_1_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_6_1_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.6.1.4 Examine key storage locations and observe processes to verify that keys are stored in the fewest possible locations.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all key storage locations examined for this testing procedure.',
                                    name: 'keyStorageLocationsEvidence_3_6_1_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'processObservationsEvidence_3_6_1_4',
                                },
                            },
                        ],
                    },
                },
            },
            3.7: {
                title: '<p>3.7 Where cryptography is used to protect stored account data, key management processes and procedures covering all aspects of the key lifecycle are defined and implemented.</p>',
                pciDss: {
                    '3.7.1': {
                        title: '<p>3.7.1 Key-management policies and procedures are implemented to include generation of strong cryptographic keys used to protect stored account data.</p>',
                        names: [
                            'inPlace_3_7_1',
                            'notApplicable_3_7_1',
                            'notTested_3_7_1',
                            'notInPlace_3_7_1',
                            'compensatingControl_3_7_1',
                            'customizedApproach_3_7_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.1.a Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define generation of strong cryptographic keys.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_1',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.1.b Observe the method for generating keys to verify that strong keys are generated.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the methods for generating keys for this testing procedure.',
                                    name: 'keyGenerationMethodEvidence_3_7_1',
                                },
                            },
                        ],
                    },
                    '3.7.2': {
                        title: '<p>3.7.2 Key-management policies and procedures are implemented to include secure distribution of cryptographic keys used to protect stored account data.</p>',
                        names: [
                            'inPlace_3_7_2',
                            'notApplicable_3_7_2',
                            'notTested_3_7_2',
                            'notInPlace_3_7_2',
                            'compensatingControl_3_7_2',
                            'customizedApproach_3_7_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.2.a Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define secure distribution of cryptographic keys.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_2',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.2.b Observe the method for distributing keys to verify that keys are distributed securely.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the method for distributing keys for this testing procedure.',
                                    name: 'keyDistributionMethodEvidence_3_7_2',
                                },
                            },
                        ],
                    },
                    '3.7.3': {
                        title: '<p>3.7.3 Key-management policies and procedures are implemented to include secure storage of cryptographic keys used to protect stored account data.</p>',
                        names: [
                            'inPlace_3_7_3',
                            'notApplicable_3_7_3',
                            'notTested_3_7_3',
                            'notInPlace_3_7_3',
                            'compensatingControl_3_7_3',
                            'customizedApproach_3_7_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.3.a Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define secure storage of cryptographic keys.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_3',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.3.b Observe the method for storing keys to verify that keys are stored securely.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the method for storing keys for this testing procedure.',
                                    name: 'keyStorageMethodEvidence_3_7_3',
                                },
                            },
                        ],
                    },
                    '3.7.4': {
                        title: '<p>3.7.4 Key management policies and procedures are implemented for cryptographic key changes for keys that have reached the end of their cryptoperiod, as defined by the associated application vendor or key owner, and based on industry best practices and guidelines, including the following:</p>\n                <ul>\n                    <li>A defined cryptoperiod for each key type in use.</li>\n                    <li>A process for key changes at the end of the defined cryptoperiod.</li>\n                </ul>',
                        names: [
                            'inPlace_3_7_4',
                            'notApplicable_3_7_4',
                            'notTested_3_7_4',
                            'notInPlace_3_7_4',
                            'compensatingControl_3_7_4',
                            'customizedApproach_3_7_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.4.a Examine the documented key-management policies and procedures for keys used for protection of stored account data to verify that they define changes to cryptographic keys that have reached the end of their cryptoperiod and include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_4',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.4.b Interview personnel, examine documentation, and observe key storage locations to verify that keys are changed at the end of the defined cryptoperiod(s).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'keyChangeInterviewsEvidence_3_7_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'keyChangeDocumentationEvidence_3_7_4',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.4.b (cont.)',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of key storage locations for this testing procedure.',
                                    name: 'keyStorageObservationEvidence_3_7_4',
                                },
                            },
                        ],
                    },
                    '3.7.5': {
                        title: '<p>3.7.5 Key management policies and procedures are implemented to include the retirement, replacement, or destruction of keys used to protect stored account data, as deemed necessary when:</p>\n                <ul>\n                    <li>The key has reached the end of its defined cryptoperiod.</li>\n                    <li>The integrity of the key has been weakened, including when personnel with knowledge of a cleartext key component leaves the company, or the role for which the key component was known.</li>\n                    <li>The key is suspected of or known to be compromised.</li>\n                    <li>Retired or replaced keys are not used for encryption operations.</li>\n                </ul>',
                        names: [
                            'inPlace_3_7_5',
                            'notApplicable_3_7_5',
                            'notTested_3_7_5',
                            'notInPlace_3_7_5',
                            'compensatingControl_3_7_5',
                            'customizedApproach_3_7_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.5.a Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define retirement, replacement, or destruction of keys in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_5',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.5.b Interview personnel to verify that processes are implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'keyProcessInterviewsEvidence_3_7_5',
                                },
                            },
                        ],
                    },
                    '3.7.6': {
                        title: '<p>3.7.6 Where manual cleartext cryptographic key-management operations are performed by personnel, key-management policies and procedures are implemented, including managing these operations using split knowledge and dual control.</p>',
                        names: [
                            'inPlace_3_7_6',
                            'notApplicable_3_7_6',
                            'notTested_3_7_6',
                            'notInPlace_3_7_6',
                            'compensatingControl_3_7_6',
                            'customizedApproach_3_7_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.6.a Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define using split knowledge and dual control.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_6',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.6.b Interview personnel and/or observe processes to verify that manual cleartext keys are managed with split knowledge and dual control.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'keyProcessInterviewsEvidence_3_7_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'processObservationsEvidence_3_7_6',
                                },
                            },
                        ],
                    },
                    '3.7.7': {
                        title: '<p>3.7.7 Key management policies and procedures are implemented to include the prevention of unauthorized substitution of cryptographic keys.</p>',
                        names: [
                            'inPlace_3_7_7',
                            'notApplicable_3_7_7',
                            'notTested_3_7_7',
                            'notInPlace_3_7_7',
                            'compensatingControl_3_7_7',
                            'customizedApproach_3_7_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions.\n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.7.a Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define prevention of unauthorized substitution of cryptographic keys.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_7',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.7.b Interview personnel and/or observe processes to verify that unauthorized substitution of keys is prevented.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'keyProcessInterviewsEvidence_3_7_7',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'processObservationsEvidence_3_7_7',
                                },
                            },
                        ],
                    },
                    '3.7.8': {
                        title: '<p>3.7.8 Key management policies and procedures are implemented to include that cryptographic key custodians formally acknowledge (in writing or electronically) that they understand and accept their key-custodian responsibilities.</p>',
                        names: [
                            'inPlace_3_7_8',
                            'notApplicable_3_7_8',
                            'notTested_3_7_8',
                            'notInPlace_3_7_8',
                            'compensatingControl_3_7_8',
                            'customizedApproach_3_7_8',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions. \n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_8',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.8.a Examine the documented key-management policies and procedures for keys used for protection of stored account data and verify that they define acknowledgments for key custodians in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented key-management policies and procedures examined for this testing procedure.',
                                    name: 'keyManagementPoliciesEvidence_3_7_8',
                                },
                            },
                            {
                                td: {
                                    0: '3.7.8.b Examine documentation or other evidence showing that key custodians have provided acknowledgments in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation or other evidence examined for this testing procedure.',
                                    name: 'keyCustodiansAcknowledgmentEvidence_3_7_8',
                                },
                            },
                        ],
                    },
                    '3.7.9': {
                        title: '<p>3.7.9 Additional requirement for service providers only: Where a service provider shares cryptographic keys with its customers for transmission or storage of account data, guidance on secure transmission, storage, and updating of such keys is documented and distributed to the service provider’s customers.</p>',
                        names: [
                            'inPlace_3_7_9',
                            'notApplicable_3_7_9',
                            'notTested_3_7_9',
                            'notInPlace_3_7_9',
                            'compensatingControl_3_7_9',
                            'customizedApproach_3_7_9',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions. \n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_3_7_9',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '3.7.9 Additional testing procedure for service provider assessments only: If the service provider shares cryptographic keys with its customers for transmission or storage of account data, examine the documentation that the service provider provides to its customers to verify it includes guidance on how to securely transmit, store, and update customers’ keys in accordance with all elements specified in Requirements 3.7.1 through 3.7.8 above.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'keyGuidanceDocumentationEvidence_3_7_9',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_4: {
        title: 'Requirement 4: Protect Cardholder Data with Strong Cryptography During Transmission Over Open, Public Networks',
        descriptions: {
            4.1: {
                title: '<p>4.1 Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and understood.</p>',
                pciDss: {
                    '4.1.1': {
                        title: '<p>4.1.1 All security policies and operational procedures that are identified in Requirement 4 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_4_1_1',
                            'notApplicable_4_1_1',
                            'notTested_4_1_1',
                            'notInPlace_4_1_1',
                            'compensatingControl_4_1_1',
                            'customizedApproach_4_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions. \n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_4_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 4 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'securityPoliciesDocumentationEvidence_4_1_1',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'securityPoliciesInterviewsEvidence_4_1_1',
                                },
                            },
                        ],
                    },
                    '4.1.2': {
                        title: '<p>4.1.2 Roles and responsibilities for performing activities in Requirement 4 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_4_1_2',
                            'notApplicable_4_1_2',
                            'notTested_4_1_2',
                            'notInPlace_4_1_2',
                            'compensatingControl_4_1_2',
                            'customizedApproach_4_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the ROC Template Instructions. \n                        *Attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_4_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 4 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'rolesResponsibilitiesDocumentationEvidence_4_1_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '4.1.2.b Interview personnel with responsibility for performing activities in Requirement 4 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'rolesResponsibilitiesInterviewsEvidence_4_1_2_b',
                                },
                            },
                        ],
                    },
                },
            },
            4.2: {
                title: '<p>4.2 PAN is protected with strong cryptography during transmission.</p>',
                pciDss: {
                    '4.2.1': {
                        title: '<p>4.2.1 Strong cryptography and security protocols are implemented to safeguard PAN during transmission over open, public networks:</p>\n                <ul>\n                    <li>Only trusted keys and certificates are accepted.</li>\n                    <li>Certificates are confirmed as valid and not expired or revoked. \n                        <b>Note:</b> This is a best practice until 31 March 2025, after which it becomes mandatory.</li>\n                    <li>The protocol supports only secure versions and does not allow fallback to insecure versions or algorithms.</li>\n                    <li>The encryption strength matches the encryption methodology in use.</li>\n                </ul>',
                        names: [
                            'inPlace_4_2_1',
                            'notApplicable_4_2_1',
                            'notTested_4_2_1',
                            'notInPlace_4_2_1',
                            'compensatingControl_4_2_1',
                            'customizedApproach_4_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as per the ROC Template Instructions. \n                        Attach Appendix C, Appendix E, or both, as required.\n                    </i>',
                            name: 'describeWhyTheAssessment_4_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.2.1.a Examine documented policies and procedures and interview personnel to verify all processes are defined according to the requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented policies and procedures examined.',
                                    name: 'documentedPoliciesProceduresEvidence_4_2_1_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: '4.2.1.a Identify the evidence reference number(s) from Section 6 for all interviews conducted.',
                                    name: 'interviewsEvidence_4_2_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '4.2.1.b Examine system configurations to verify strong cryptography and security protocols are implemented as required.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined.',
                                    name: 'systemConfigurationsEvidence_4_2_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '4.2.1.c Verify that all PAN is encrypted with strong cryptography during transmission over open, public networks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all cardholder data transmissions examined.',
                                    name: 'cardholderDataTransmissionsEvidence_4_2_1_c',
                                },
                            },
                            {
                                td: {
                                    0: '4.2.1.d Examine system configurations to verify that keys or certificates that cannot be trusted are rejected.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined.',
                                    name: 'keysCertificatesEvidence_4_2_1_d',
                                },
                            },
                        ],
                    },
                    '4.2.1.1': {
                        title: '<p>4.2.1.1 An inventory of the entity’s trusted keys and certificates used to protect PAN during transmission is maintained.</p>\n                <i>Note:</i> This is a best practice until 31 March 2025, after which it becomes mandatory for PCI DSS assessments.',
                        names: [
                            'inPlace_4_2_1_1',
                            'notApplicable_4_2_1_1',
                            'notTested_4_2_1_1',
                            'notInPlace_4_2_1_1',
                            'compensatingControl_4_2_1_1',
                            'customizedApproach_4_2_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as per the “Required Reporting” column of the ROC Template Instructions. \n                        Attach Appendix C, Appendix E, or both, as applicable.\n                    </i>',
                            name: 'describeWhyTheAssessment_4_2_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.2.1.1.a Examine documented policies and procedures to verify processes are defined for maintaining an inventory of trusted keys and certificates.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented policies and procedures examined.',
                                    name: 'documentedPoliciesProceduresEvidence_4_2_1_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '4.2.1.1.b Examine the inventory of trusted keys and certificates to verify it is kept up to date.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all inventories of trusted keys examined.',
                                    name: 'inventoryOfKeysEvidence_4_2_1_1_b',
                                },
                            },
                        ],
                    },
                    '4.2.1.2': {
                        title: '<p>4.2.1.2 Wireless networks transmitting PAN or connected to the CDE use industry best practices to implement strong cryptography for authentication and transmission.</p>',
                        names: [
                            'inPlace_4_2_1_2',
                            'notApplicable_4_2_1_2',
                            'notTested_4_2_1_2',
                            'notInPlace_4_2_1_2',
                            'compensatingControl_4_2_1_2',
                            'customizedApproach_4_2_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all relevant details from the “Required Reporting” column of the ROC Template Instructions. \n                        Attach Appendix C, Appendix E, or both, as applicable.\n                    </i>',
                            name: 'describeWhyTheAssessment_4_2_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.2.1.2 Examine system configurations to verify that wireless networks transmitting PAN or connected to the CDE use industry best practices for strong cryptography in authentication and transmission.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_4_2_1_2',
                                },
                            },
                        ],
                    },
                    '4.2.2': {
                        title: '<p>4.2.2 PAN is secured with strong cryptography whenever it is sent via end-user messaging technologies.</p>',
                        names: [
                            'inPlace_4_2_2',
                            'notApplicable_4_2_2',
                            'notTested_4_2_2',
                            'notInPlace_4_2_2',
                            'compensatingControl_4_2_2',
                            'customizedApproach_4_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i><b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.</i>',
                            name: 'describeWhyTheAssessment_4_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '4.2.2.a Examine documented policies and procedures to verify that processes are defined to secure PAN with strong cryptography whenever sent over end-user messaging technologies.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'docPoliciesProceduresEvidence_4_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '4.2.2.b Examine system configurations and vendor documentation to verify that PAN is secured with strong cryptography whenever it is sent via end-user messaging technologies.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_4_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_4_2_2',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_5: {
        title: 'Requirement 5: Protect All Systems and Networks from Malicious Software',
        descriptions: {
            5.1: {
                title: '<p>5.1 Processes and mechanisms for protecting all systems and networks from malicious software are defined and understood.</p>',
                pciDss: {
                    '5.1.1': {
                        title: '<p>5.1.1 All security policies and operational procedures identified in Requirement 5 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_5_1_1',
                            'notApplicable_5_1_1',
                            'notTested_5_1_1',
                            'notInPlace_5_1_1',
                            'compensatingControl_5_1_1',
                            'customizedApproach_5_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details required as per the “Required Reporting” column in the ROC Template Instructions.\n                        If applicable, attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 5 are managed according to all specified elements.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_5_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_5_1_1',
                                },
                            },
                        ],
                    },
                    '5.1.2': {
                        title: '<p>5.1.2 Roles and responsibilities for performing activities in Requirement 5 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_5_1_2',
                            'notApplicable_5_1_2',
                            'notTested_5_1_2',
                            'notInPlace_5_1_2',
                            'compensatingControl_5_1_2',
                            'customizedApproach_5_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details required as per the “Required Reporting” column in the ROC Template Instructions.\n                        If applicable, attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 5 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_5_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '5.1.2.b Interview personnel with responsibility for performing activities in Requirement 5 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_5_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            5.2: {
                title: '<p>5.2 Malicious software (malware) is prevented or detected and addressed.</p>',
                pciDss: {
                    '5.2.1': {
                        title: '<p>5.2.1 An anti-malware solution(s) is deployed on all system components, except for those system components identified in periodic evaluations per Requirement 5.2.3 that concludes the system components are not at risk from malware.</p>',
                        names: [
                            'inPlace_5_2_1',
                            'notApplicable_5_2_1',
                            'notTested_5_2_1',
                            'notInPlace_5_2_1',
                            'compensatingControl_5_2_1',
                            'customizedApproach_5_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details required as per the “Required Reporting” column in the ROC Template Instructions.\n                        If applicable, attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.2.1.a Examine system components to verify that an anti-malware solution(s) is deployed on all system components, except for those determined to not be at risk from malware based on periodic evaluations per Requirement 5.2.3.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system components examined for this testing procedure.',
                                    name: 'systemComponentsEvidence_5_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '5.2.1.b For any system components without an anti-malware solution, examine the periodic evaluations to verify the component was evaluated and the evaluation concludes that the component is not at risk from malware.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all periodic evaluations examined for this testing procedure.',
                                    name: 'periodicEvaluationsEvidence_5_2_1',
                                },
                            },
                        ],
                    },
                    '5.2.2': {
                        title: '<p>5.2.2 The deployed anti-malware solution(s):</p>\n                <ul>\n                    <li>Detects all known types of malware.</li>\n                    <li>Removes, blocks, or contains all known types of malware.</li>\n                </ul>',
                        names: [
                            'inPlace_5_2_2',
                            'notApplicable_5_2_2',
                            'notTested_5_2_2',
                            'notInPlace_5_2_2',
                            'compensatingControl_5_2_2',
                            'customizedApproach_5_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details required as per the “Required Reporting” column in the ROC Template Instructions.\n                        If applicable, attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.2.2 Examine vendor documentation and configurations of the anti-malware solution(s) to verify that the solution:\n                    <ul>\n                        <li>Detects all known types of malware.</li>\n                        <li>Removes, blocks, or contains all known types of malware.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_5_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsEvidence_5_2_2',
                                },
                            },
                        ],
                    },
                    '5.2.3': {
                        title: '<p>5.2.3 Any system components that are not at risk for malware are evaluated periodically to include the following:</p>\n                <ul>\n                    <li>A documented list of all system components not at risk for malware.</li>\n                    <li>Identification and evaluation of evolving malware threats for those system components.</li>\n                    <li>Confirmation whether such system components continue to not require anti-malware protection.</li>\n                </ul>',
                        names: [
                            'inPlace_5_2_3',
                            'notApplicable_5_2_3',
                            'notTested_5_2_3',
                            'notInPlace_5_2_3',
                            'compensatingControl_5_2_3',
                            'customizedApproach_5_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.2.3.a Examine documented policies and procedures to verify that a process is defined for periodic evaluations of any system components that are not at risk for malware that includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'documentedPoliciesProceduresEvidence_5_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '5.2.3.b Interview personnel to verify that the evaluations include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_5_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '5.2.3.c Examine the list of system components identified as not at risk of malware and compare to the system components without an anti-malware solution deployed per Requirement 5.2.1 to verify that the system components match for both requirements.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all lists of system components examined for this testing procedure.',
                                    name: 'systemComponentsListEvidence_5_2_3',
                                },
                            },
                        ],
                    },
                    '5.2.3.1': {
                        title: '<p>5.2.3.1 The frequency of periodic evaluations of system components identified as not at risk for malware is defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_5_2_3_1',
                            'notApplicable_5_2_3_1',
                            'notTested_5_2_3_1',
                            'notInPlace_5_2_3_1',
                            'compensatingControl_5_2_3_1',
                            'customizedApproach_5_2_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_2_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.2.3.1.a Examine the entity’s targeted risk analysis for the frequency of periodic evaluations of system components identified as not at risk for malware to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysisEvidence_5_2_3_1',
                                },
                            },
                            {
                                td: {
                                    0: '5.2.3.1.b Examine documented results of periodic evaluations of system components identified as not at risk for malware and interview personnel to verify that evaluations are performed at the frequency defined in the entity’s targeted risk analysis performed for this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of periodic evaluations of system components examined for this testing procedure.',
                                    name: 'documentedResultsEvidence_5_2_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    interviewEvidence:
                                        'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_5_2_3_1',
                                },
                            },
                        ],
                    },
                },
            },
            5.3: {
                title: '<p>5.3 Anti-malware mechanisms and processes are active, maintained, and monitored.</p>',
                pciDss: {
                    '5.3.1': {
                        title: '<p>5.3.1 The anti-malware solution(s) is kept current via automatic updates.</p>',
                        names: [
                            'inPlace_5_3_1',
                            'notApplicable_5_3_1',
                            'notTested_5_3_1',
                            'notInPlace_5_3_1',
                            'compensatingControl_5_3_1',
                            'customizedApproach_5_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.1.a Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all anti-malware solution(s) configurations examined for this testing procedure.',
                                    name: 'antiMalwareSolutionConfigEvidence_5_3_1',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.1.b Examine system components and logs, to verify that the anti-malware solution(s) and definitions are current and have been promptly deployed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system components examined for this testing procedure.',
                                    name: 'systemComponentsEvidence_5_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all logs examined for this testing procedure.',
                                    name: 'logsEvidence_5_3_1',
                                },
                            },
                        ],
                    },
                    '5.3.2': {
                        title: '<p>5.3.2 The anti-malware solution(s):</p>\n                <ul>\n                    <li>Performs periodic scans and active or real-time scans.</li>\n                    <li>OR performs continuous behavioral analysis of systems or processes.</li>\n                </ul>',
                        names: [
                            'inPlace_5_3_2',
                            'notApplicable_5_3_2',
                            'notTested_5_3_2',
                            'notInPlace_5_3_2',
                            'compensatingControl_5_3_2',
                            'customizedApproach_5_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.2.a Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution(s) is configured to perform at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all anti-malware solution(s) configurations examined for this testing procedure.',
                                    name: 'antiMalwareSolutionConfigEvidence_5_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.2.b Examine system components, including all operating system types identified as at risk for malware, to verify the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system components examined for this testing procedure.',
                                    name: 'systemComponentsEvidence_5_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.2.c Examine logs and scan results to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all logs examined for this testing procedure.',
                                    name: 'logsEvidence_5_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all scan results examined for this testing procedure.',
                                    name: 'scanResultsEvidence_5_3_2',
                                },
                            },
                        ],
                    },
                    '5.3.2.1': {
                        title: '<p>5.3.2.1 If periodic malware scans are performed to meet Requirement 5.3.2, the frequency of scans is defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_5_3_2_1',
                            'notApplicable_5_3_2_1',
                            'notTested_5_3_2_1',
                            'notInPlace_5_3_2_1',
                            'compensatingControl_5_3_2_1',
                            'customizedApproach_5_3_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.2.1.a Examine the entity’s targeted risk analysis for the frequency of periodic malware scans to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysisEvidence_5_3_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.2.1.b Examine documented results of periodic malware scans and interview personnel to verify scans are performed at the frequency defined in the entity’s targeted risk analysis performed for this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of periodic malware scans examined for this testing procedure.',
                                    name: 'periodicMalwareScanResultsEvidence_5_3_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_5_3_2_1',
                                },
                            },
                        ],
                    },
                    '5.3.3': {
                        title: '<p>5.3.3 For removable electronic media, the anti-malware solution(s):</p>\n                <ul>\n                    <li>Performs automatic scans of when the media is inserted, connected, or logically mounted,</li>\n                    <li>OR performs continuous behavioral analysis of systems or processes when the media is inserted, connected, or logically mounted.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_5_3_3',
                            'notApplicable_5_3_3',
                            'notTested_5_3_3',
                            'notInPlace_5_3_3',
                            'compensatingControl_5_3_3',
                            'customizedApproach_5_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.3.a Examine anti-malware solution(s) configurations to verify that, for removable electronic media, the solution is configured to perform at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all anti-malware solution(s) configurations examined for this testing procedure.',
                                    name: 'antiMalwareSolutionConfigEvidence_5_3_3',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.3.b Examine system components with removable electronic media connected to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system components examined for this testing procedure.',
                                    name: 'systemComponentsEvidence_5_3_3',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.3.c Examine logs and scan results to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all logs examined for this testing procedure.',
                                    name: 'logsEvidence_5_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all scan results examined for this testing procedure.',
                                    name: 'scanResultsEvidence_5_3_3',
                                },
                            },
                        ],
                    },
                    '5.3.4': {
                        title: '<p>5.3.4 Audit logs for the anti-malware solution(s) are enabled and retained in accordance with Requirement 10.5.1.</p>',
                        names: [
                            'inPlace_5_3_4',
                            'notApplicable_5_3_4',
                            'notTested_5_3_4',
                            'notInPlace_5_3_4',
                            'compensatingControl_5_3_4',
                            'customizedApproach_5_3_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.4 Examine anti-malware solution(s) configurations to verify logs are enabled and retained in accordance with Requirement 10.5.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all anti-malware solution(s) configurations examined for this testing procedure.',
                                    name: 'antiMalwareSolutionLogsEvidence_5_3_4',
                                },
                            },
                        ],
                    },
                    '5.3.5': {
                        title: '<p>5.3.5 Anti-malware mechanisms cannot be disabled or altered by users, unless specifically documented, and authorized by management on a case-by-case basis for a limited time period.</p>',
                        names: [
                            'inPlace_5_3_5',
                            'notApplicable_5_3_5',
                            'notTested_5_3_5',
                            'notInPlace_5_3_5',
                            'compensatingControl_5_3_5',
                            'customizedApproach_5_3_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_3_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.3.5.a Examine anti-malware configurations, to verify that the anti-malware mechanisms cannot be disabled or altered by users.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all anti-malware solution configurations examined for this testing procedure.',
                                    name: 'antiMalwareConfigEvidence_5_3_5',
                                },
                            },
                            {
                                td: {
                                    0: '5.3.5.b Interview responsible personnel and observe processes to verify that any requests to disable or alter anti-malware mechanisms are specifically documented and authorized by management on a case-by-case basis for a limited time period.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewEvidence_5_3_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationEvidence_5_3_5',
                                },
                            },
                        ],
                    },
                },
            },
            5.4: {
                title: '<p>5.4 Anti-phishing mechanisms protect users against phishing attacks.</p>',
                pciDss: {
                    '5.4.1': {
                        title: '<p>5.4.1 Processes and automated mechanisms are in place to detect and protect personnel against phishing attacks.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_5_4_1',
                            'notApplicable_5_4_1',
                            'notTested_5_4_1',
                            'notInPlace_5_4_1',
                            'compensatingControl_5_4_1',
                            'customizedApproach_5_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_5_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '5.4.1 Observe implemented processes and examine mechanisms to verify controls are in place to detect and protect personnel against phishing attacks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of implemented processes for this testing procedure.',
                                    name: 'implementedProcessesEvidence_5_4_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all mechanisms examined for this testing procedure.',
                                    name: 'mechanismsExaminedEvidence_5_4_1',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_6: {
        title: 'Requirement 6: Develop and Maintain Secure Systems and Software',
        descriptions: {
            6.1: {
                title: '<p>6.1 Processes and mechanisms for developing and maintaining secure systems and software are defined and understood.</p>',
                pciDss: {
                    '6.1.1': {
                        title: '<p>6.1.1 All security policies and operational procedures that are identified in Requirement 6 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_6_1_1',
                            'notApplicable_6_1_1',
                            'notTested_6_1_1',
                            'notInPlace_6_1_1',
                            'compensatingControl_6_1_1',
                            'customizedApproach_6_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_6_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 6 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_6_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_1_1',
                                },
                            },
                        ],
                    },
                    '6.1.2': {
                        title: '<p>6.1.2 Roles and responsibilities for performing activities in Requirement 6 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_6_1_2',
                            'notApplicable_6_1_2',
                            'notTested_6_1_2',
                            'notInPlace_6_1_2',
                            'compensatingControl_6_1_2',
                            'customizedApproach_6_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_6_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 6 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_6_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '6.1.2.b Interview personnel responsible for performing activities in Requirement 6 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            6.2: {
                title: '<p>6.2 Bespoke and custom software are developed securely.</p>',
                pciDss: {
                    '6.2.1': {
                        title: '<p>6.2.1 Bespoke and custom software are developed securely, as follows:</p>\n                <ul>\n                    <li>Based on industry standards and/or best practices for secure development.</li>\n                    <li>In accordance with PCI DSS (for example, secure authentication and logging).</li>\n                    <li>Incorporating consideration of information security issues during each stage of the software development lifecycle.</li>\n                </ul>',
                        names: [
                            'inPlace_6_2_1',
                            'notApplicable_6_2_1',
                            'notTested_6_2_1',
                            'notInPlace_6_2_1',
                            'compensatingControl_6_2_1',
                            'customizedApproach_6_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_6_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.2.1 Examine documented software development procedures to verify that processes are defined that include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented software development procedures examined for this testing procedure.',
                                    name: 'softwareDevelopmentProceduresEvidence_6_2_1',
                                },
                            },
                        ],
                    },
                    '6.2.2': {
                        title: '<p>6.2.2 Software development personnel working on bespoke and custom software are trained at least once every 12 months as follows:</p>\n                <ul>\n                    <li>On software security relevant to their job function and development languages.</li>\n                    <li>Including secure software design and secure coding techniques.</li>\n                    <li>Including, if security testing tools are used, how to use the tools for detecting vulnerabilities in software.</li>\n                </ul>',
                        names: [
                            'inPlace_6_2_2',
                            'notApplicable_6_2_2',
                            'notTested_6_2_2',
                            'notInPlace_6_2_2',
                            'compensatingControl_6_2_2',
                            'customizedApproach_6_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_6_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.2.2.a Examine software development procedures to verify that processes are defined for training of software development personnel developing bespoke and custom software that includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all software development procedures examined for this testing procedure.',
                                    name: 'softwareDevelopmentProceduresEvidence_6_2_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '6.2.2.b Examine training records and interview personnel to verify that software development personnel working on bespoke and custom software received software security training that is relevant to their job function and development languages in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all training records examined for this testing procedure.',
                                    name: 'trainingRecordsEvidence_6_2_2_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_2_2_b',
                                },
                            },
                        ],
                    },
                    '6.2.3': {
                        title: '<p>6.2.3 Bespoke and custom software is reviewed prior to being released into production or to customers, to identify and correct potential coding vulnerabilities, as follows:</p>\n        <ul>\n            <li>Code reviews ensure code is developed according to secure coding guidelines.</li>\n            <li>Code reviews look for both existing and emerging software vulnerabilities.</li>\n            <li>Appropriate corrections are implemented prior to release.</li>\n        </ul>',
                        names: [
                            'inPlace_6_2_3',
                            'notApplicable_6_2_3',
                            'notTested_6_2_3',
                            'notInPlace_6_2_3',
                            'compensatingControl_6_2_3',
                            'customizedApproach_6_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.2.3.a Examine documented software development procedures and interview responsible personnel to verify that processes are defined that require all bespoke and custom software to be reviewed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented software development procedures examined for this testing procedure.',
                                    name: 'softwareDevelopmentProceduresEvidence_6_2_3_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_2_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '6.2.3.b Examine evidence of changes to bespoke and custom software to verify that the code changes were reviewed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all evidence of changes examined for this testing procedure.',
                                    name: 'codeChangesEvidence_6_2_3_b',
                                },
                            },
                        ],
                    },
                    '6.2.3.1': {
                        title: '<p>6.2.3.1 If manual code reviews are performed for bespoke and custom software prior to release to production, code changes are:</p>\n        <ul>\n            <li>Reviewed by individuals other than the originating code author, and who are knowledgeable about code-review techniques and secure coding practices.</li>\n            <li>Reviewed and approved by management prior to release.</li>\n        </ul>',
                        names: [
                            'inPlace_6_2_3_1',
                            'notApplicable_6_2_3_1',
                            'notTested_6_2_3_1',
                            'notInPlace_6_2_3_1',
                            'compensatingControl_6_2_3_1',
                            'customizedApproach_6_2_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_2_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.2.3.1.a If manual code reviews are performed for bespoke and custom software prior to release to production, examine documented software development procedures and interview responsible personnel to verify that processes are defined for manual code reviews to be conducted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented software development procedures examined for this testing procedure.',
                                    name: 'manualCodeReviewProceduresEvidence_6_2_3_1_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_2_3_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '6.2.3.1.b Examine evidence of changes to bespoke and custom software and interview personnel to verify that manual code reviews were conducted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all evidence of changes examined for this testing procedure.',
                                    name: 'codeChangesEvidence_6_2_3_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_2_3_1_b',
                                },
                            },
                        ],
                    },
                    '6.2.4': {
                        title: '<p>6.2.4 Software engineering techniques or other methods are defined and in use by software development personnel to prevent or mitigate common software attacks and related vulnerabilities in bespoke and custom software, including but not limited to the following:</p>\n        <ul>\n            <li>Injection attacks, including SQL, LDAP, XPath, or other command, parameter, object, fault, or injection-type flaws.</li>\n            <li>Attacks on data and data structures, including attempts to manipulate buffers, pointers, input data, or shared data.</li>\n            <li>Attacks on cryptography usage, including attempts to exploit weak, insecure, or inappropriate cryptographic implementations, algorithms, cipher suites, or modes of operation.</li>\n            <li>Attacks on business logic, including attempts to abuse or bypass application features and functionalities through the manipulation of APIs, communication protocols and channels, client-side functionality, or other system/application functions and resources. This includes cross-site scripting (XSS) and cross-site request forgery (CSRF).</li>\n            <li>Attacks on access control mechanisms, including attempts to bypass or abuse identification, authentication, or authorization mechanisms, or attempts to exploit weaknesses in the implementation of such mechanisms.</li>\n            <li>Attacks via any "high-risk" vulnerabilities identified in the vulnerability identification process, as defined in Requirement 6.3.1.</li>\n        </ul>',
                        names: [
                            'inPlace_6_2_4',
                            'notApplicable_6_2_4',
                            'notTested_6_2_4',
                            'notInPlace_6_2_4',
                            'compensatingControl_6_2_4',
                            'customizedApproach_6_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.2.4 Examine documented procedures and interview responsible software development personnel to verify that software engineering techniques or other methods are defined and in use by developers of bespoke and custom software to prevent or mitigate all common software attacks as specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined for this testing procedure.',
                                    name: 'documentedProceduresEvidence_6_2_4_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_2_4_a',
                                },
                            },
                        ],
                    },
                },
            },
            6.3: {
                title: '<p>6.3 Security vulnerabilities are identified and addressed.</p>',
                pciDss: {
                    '6.3.1': {
                        title: '<p>6.3.1 Security vulnerabilities are identified and managed as follows:</p>\n        <ul>\n            <li>New security vulnerabilities are identified using industry-recognized sources for security vulnerability information, including alerts from international and national computer emergency response teams (CERTs).</li>\n            <li>Vulnerabilities are assigned a risk ranking based on industry best practices and consideration of potential impact.</li>\n            <li>Risk rankings identify, at a minimum, all vulnerabilities considered to be a high-risk or critical to the environment.</li>\n            <li>Vulnerabilities for bespoke and custom, and third-party software (for example operating systems and databases) are covered.</li>\n        </ul>',
                        names: [
                            'inPlace_6_3_1',
                            'notApplicable_6_3_1',
                            'notTested_6_3_1',
                            'notInPlace_6_3_1',
                            'compensatingControl_6_3_1',
                            'customizedApproach_6_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.3.1.a Examine policies and procedures for identifying and managing security vulnerabilities to verify that processes are defined in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesEvidence_6_3_1_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: '6.3.1.b Interview responsible personnel, examine documentation, and observe processes to verify that security vulnerabilities are identified and managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_3_1_b',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_6_3_1_b',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsEvidence_6_3_1_b',
                                },
                            },
                        ],
                    },
                    '6.3.2': {
                        title: '<p>6.3.2 An inventory of bespoke and custom software, and third-party software components incorporated into bespoke and custom software is maintained to facilitate vulnerability and patch management.</p>\n        <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_6_3_2',
                            'notApplicable_6_3_2',
                            'notTested_6_3_2',
                            'notInPlace_6_3_2',
                            'compensatingControl_6_3_2',
                            'customizedApproach_6_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.3.2.a Examine documentation and interview personnel to verify that an inventory of bespoke and custom software and third-party software components incorporated into bespoke and custom software is maintained, and that the inventory is used to identify and address vulnerabilities.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_6_3_2_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'softwareDocumentationEvidence_6_3_2_b',
                                },
                            },
                            {
                                td: {
                                    0: '6.3.2.b Examine software documentation, including for bespoke and custom software that integrates third-party software components, and compare it to the inventory to verify that the inventory includes the bespoke and custom software and third-party software components.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all software documentation examined for this testing procedure.',
                                    name: 'interviewsEvidence_6_3_2_a',
                                },
                            },
                        ],
                    },
                    '6.3.3': {
                        title: '<p>6.3.3 All system components are protected from known vulnerabilities by installing applicable security patches/updates as follows:</p>\n        <ul>\n            <li>Patches/updates for critical vulnerabilities (identified according to the risk ranking process at Requirement 6.3.1) are installed within one month of release.</li>\n            <li>All other applicable security patches/updates are installed within an appropriate time frame as determined by the entity’s assessment of the criticality of the risk to the environment as identified according to the risk ranking process at Requirement 6.3.1.</li>\n        </ul>',
                        names: [
                            'inPlace_6_3_3',
                            'notApplicable_6_3_3',
                            'notTested_6_3_3',
                            'notInPlace_6_3_3',
                            'compensatingControl_6_3_3',
                            'customizedApproach_6_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '6.3.3.a Examine policies and procedures to verify processes are defined for addressing vulnerabilities by installing applicable security patches/updates in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesEvidence_6_3_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '6.3.3.b Examine system components and related software and compare the list of installed security patches/updates to the most recent security patch/update information to verify vulnerabilities are addressed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system components and related software examined for this testing procedure.',
                                    name: 'systemComponentsEvidence_6_3_3_b',
                                },
                            },
                        ],
                    },
                },
            },
            6.4: {
                title: '<p>6.4 Public-facing web applications are protected against attacks.</p>',
                pciDss: {
                    '6.4.1': {
                        title: '<p>6.4.1 For public-facing web applications, new threats and vulnerabilities are addressed on an ongoing basis and these applications are protected against known attacks as follows:</p>\n        <ul>\n            <li>Reviewing public-facing web applications via manual or automated application vulnerability security assessment tools or methods as follows:\n                <ul>\n                    <li>At least once every 12 months and after significant changes.</li>\n                    <li>By an entity that specializes in application security.</li>\n                    <li>Including, at a minimum, all common software attacks in Requirement 6.2.4.</li>\n                    <li>All vulnerabilities are ranked in accordance with requirement 6.3.1.</li>\n                    <li>All vulnerabilities are corrected.</li>\n                    <li>The application is re-evaluated after the corrections.</li>\n                </ul>\n            </li>\n            <li>OR Installing an automated technical solution(s) that continually detects and prevents web-based attacks as follows:\n                <ul>\n                    <li>Installed in front of public-facing web applications to detect and prevent web-based attacks.</li>\n                    <li>Actively running and up to date as applicable.</li>\n                    <li>Generating audit logs.</li>\n                    <li>Configured to either block web-based attacks or generate an alert that is immediately investigated.</li>\n                </ul>\n            </li>\n        </ul>\n        <i>Note: This requirement will be superseded by Requirement 6.4.2 after 31 March 2025 when Requirement 6.4.2 becomes effective.</i>',
                        names: [
                            'inPlace_6_4_1',
                            'notApplicable_6_4_1',
                            'notTested_6_4_1',
                            'notInPlace_6_4_1',
                            'compensatingControl_6_4_1',
                            'customizedApproach_6_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.4.1 For public-facing web applications, ensure that either one of the required methods is in place as follows: </p>\n                        <ul>\n                            <li>If manual or automated vulnerability security assessment tools or methods are in use, examine documented processes, interview personnel, and examine records of application security assessments to verify that public-facing web applications are reviewed in accordance with all elements of this requirement specific to the tool/method.</li>\n                            OR <li>If an automated technical solution(s) is installed that continually detects and prevents web-based attacks, examine the system configuration settings and audit logs, and interview responsible personnel to verify that the automated technical solution(s) is installed in accordance with all elements of this requirement specific to the solution(s).</li>\n                        </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented processes examined for this testing procedure.',
                                    name: 'documentedProcessesEvidence_6_4_1_a',
                                },
                                rowspan: 5,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'automatedSolutionEvidence_6_4_1_b',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all records of application security assessments examined for this testing procedure.',
                                    name: 'documentedProcessesEvidence_6_4_1_c',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'interviewsEvidence_6_4_1',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'applicationSecurityAssessmentRecordsEvidence_6_4_1',
                                },
                            },
                        ],
                    },
                    '6.4.2': {
                        title: '<p>6.4.2 For public-facing web applications, an automated technical solution is deployed that continually detects and prevents web-based attacks, with at least the following:</p>\n        <ul>\n            <li>Installed in front of public-facing web applications and configured to detect and prevent web-based attacks.</li>\n            <li>Actively running and up to date as applicable.</li>\n            <li>Generating audit logs.</li>\n            <li>Configured to either block web-based attacks or generate an alert that is immediately investigated.</li>\n        </ul>\n        <i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment. This new requirement will replace Requirement 6.4.1 once its effective date is reached.</i>',
                        names: [
                            'inPlace_6_4_2',
                            'notApplicable_6_4_2',
                            'notTested_6_4_2',
                            'notInPlace_6_4_2',
                            'compensatingControl_6_4_2',
                            'customizedApproach_6_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.4.2 For public-facing web applications, examine the system configuration settings and audit logs, and interview responsible personnel to verify that an automated technical solution that detects and prevents web-based attacks is in place in accordance with all elements specified in this requirement.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigSettingsEvidence_6_4_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'auditLogsEvidence_6_4_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_4_2',
                                },
                            },
                        ],
                    },
                    '6.4.3': {
                        title: "<p>6.4.3 All payment page scripts that are loaded and executed in the consumer's browser are managed as follows:</p>\n        <ul>\n            <li>A method is implemented to confirm that each script is authorized.</li>\n            <li>A method is implemented to assure the integrity of each script.</li>\n            <li>An inventory of all scripts is maintained with written business or technical justification as to why each is necessary.</li>\n        </ul>\n        <i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i>",
                        names: [
                            'inPlace_6_4_3',
                            'notApplicable_6_4_3',
                            'notTested_6_4_3',
                            'notInPlace_6_4_3',
                            'compensatingControl_6_4_3',
                            'customizedApproach_6_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.4.3.a Examine policies and procedures to verify that processes are defined for managing all payment page scripts that are loaded and executed in the consumer’s browser, in accordance with all elements specified in this requirement.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_6_4_3_a',
                                },
                            },
                            {
                                td: {
                                    0: "<p>6.4.3.b Interview responsible personnel and examine inventory records and system configurations to verify that all payment page scripts that are loaded and executed in the consumer's browser are managed in accordance with all elements specified in this requirement.</p>",
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_6_4_3_b',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all inventory records examined for this testing procedure.',
                                    name: 'inventoryRecordsEvidence_6_4_3',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsEvidence_6_4_3',
                                },
                            },
                        ],
                    },
                },
            },
            6.5: {
                title: '<p>6.5 Changes to all system components are managed securely.</p>',
                pciDss: {
                    '6.5.1': {
                        title: '<p>6.5.1 Changes to all system components in the production environment are made according to established procedures that include:</p>\n        <ul>\n            <li>Reason for, and description of, the change.</li>\n            <li>Documentation of security impact.</li>\n            <li>Documented change approval by authorized parties.</li>\n            <li>Testing to verify that the change does not adversely impact system security.</li>\n            <li>For bespoke and custom software changes, all updates are tested for compliance with Requirement 6.2.4 before being deployed into production.</li>\n            <li>Procedures to address failures and return to a secure state.</li>\n        </ul>',
                        names: [
                            'inPlace_6_5_1',
                            'notApplicable_6_5_1',
                            'notTested_6_5_1',
                            'notInPlace_6_5_1',
                            'compensatingControl_6_5_1',
                            'customizedApproach_6_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.1.a Examine documented change control procedures to verify procedures are defined for changes to all system components in the production environment to include all elements specified in this requirement.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented change control procedures examined for this testing procedure.',
                                    name: 'documentedChangeControlEvidence_6_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.1.b Examine recent changes to system components and trace those changes back to related change control documentation. For each change examined, verify the change is implemented in accordance with all elements specified in this requirement.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all recent changes to system components examined for this testing procedure.',
                                    name: 'recentChangesEvidence_6_5_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all change control documentation examined for this testing procedure.',
                                    name: 'changeControlDocumentationEvidence_6_5_1',
                                },
                            },
                        ],
                    },
                    '6.5.2': {
                        title: '<p>6.5.2 Upon completion of a significant change, all applicable PCI DSS requirements are confirmed to be in place on all new or changed systems and networks, and documentation is updated as applicable.</p>',
                        names: [
                            'inPlace_6_5_2',
                            'notApplicable_6_5_2',
                            'notTested_6_5_2',
                            'notInPlace_6_5_2',
                            'compensatingControl_6_5_2',
                            'customizedApproach_6_5_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.2 Examine documentation for significant changes, interview personnel, and observe the affected systems/networks to verify that the entity confirmed applicable PCI DSS requirements were in place on all new or changed systems and networks and that documentation was updated as applicable.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExaminedEvidence_6_5_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_6_5_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of the affected systems/networks for this testing procedure.',
                                    name: 'observationsEvidence_6_5_2',
                                },
                            },
                        ],
                    },
                    '6.5.3': {
                        title: '<p>6.5.3 Pre-production environments are separated from production environments and the separation is enforced with access controls.</p>',
                        names: [
                            'inPlace_6_5_3',
                            'notApplicable_6_5_3',
                            'notTested_6_5_3',
                            'notInPlace_6_5_3',
                            'compensatingControl_6_5_3',
                            'customizedApproach_6_5_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.3.a Examine policies and procedures to verify that processes are defined for separating the pre-production environment from the production environment via access controls that enforce the separation.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesExaminedEvidence_6_5_3',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.3.b Examine network documentation and configurations of network security controls to verify that the pre-production environment is separate from the production environment(s).</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network documentation examined for this testing procedure.',
                                    name: 'networkDocumentationEvidence_6_5_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsExaminedEvidence_6_5_3',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.3.c Examine access control settings to verify that access controls are in place to enforce separation between the pre-production and production environment(s).</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all access control settings examined for this testing procedure.',
                                    name: 'accessControlSettingsEvidence_6_5_3',
                                },
                            },
                        ],
                    },
                    '6.5.4': {
                        title: '<p>6.5.4 Roles and functions are separated between production and pre-production environments to provide accountability such that only reviewed and approved changes are deployed.</p>',
                        names: [
                            'inPlace_6_5_4',
                            'notApplicable_6_5_4',
                            'notTested_6_5_4',
                            'notInPlace_6_5_4',
                            'compensatingControl_6_5_4',
                            'customizedApproach_6_5_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.4.a Examine policies and procedures to verify that processes are defined for separating roles and functions to provide accountability such that only reviewed and approved changes are deployed.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesExaminedEvidence_6_5_4',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.4.b Observe processes and interview personnel to verify implemented controls separate roles and functions and provide accountability such that only reviewed and approved changes are deployed.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsOfProcessesEvidence_6_5_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_6_5_4',
                                },
                            },
                        ],
                    },
                    '6.5.5': {
                        title: '<p>6.5.5 Live PANs are not used in pre-production environments, except where those environments are included in the CDE and protected in accordance with all applicable PCI DSS requirements.</p>',
                        names: [
                            'inPlace_6_5_5',
                            'notApplicable_6_5_5',
                            'notTested_6_5_5',
                            'notInPlace_6_5_5',
                            'compensatingControl_6_5_5',
                            'customizedApproach_6_5_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.5.a Examine policies and procedures to verify that processes are defined for not using live PANs in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesExaminedEvidence_6_5_5',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.5.b Observe testing processes and interview personnel to verify procedures are in place to ensure live PANs are not used in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the testing processes for this testing procedure.',
                                    name: 'observationsOfTestingProcessesEvidence_6_5_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_6_5_5',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.5.c Examine pre-production test data to verify live PANs are not used in pre-production environments, except where those environments are in a CDE and protected in accordance with all applicable PCI DSS requirements.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all pre-production test data examined for this testing procedure.',
                                    name: 'preProductionTestDataEvidence_6_5_5',
                                },
                            },
                        ],
                    },
                    '6.5.6': {
                        title: '<p>6.5.6 Test data and test accounts are removed from system components before the system goes into production.</p>',
                        names: [
                            'inPlace_6_5_6',
                            'notApplicable_6_5_6',
                            'notTested_6_5_6',
                            'notInPlace_6_5_6',
                            'compensatingControl_6_5_6',
                            'customizedApproach_6_5_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_6_5_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>6.5.6.a Examine policies and procedures to verify that processes are defined for removal of test data and test accounts from system components before the system goes into production.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesExaminedEvidence_6_5_6',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.6.b Observe testing processes for both off-the-shelf software and in-house applications, and interview personnel to verify test data and test accounts are removed before a system goes into production.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the testing processes for this testing procedure.',
                                    name: 'observationsOfTestingProcessesEvidence_6_5_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_6_5_6',
                                },
                            },
                            {
                                td: {
                                    0: '<p>6.5.6.c Examine data and accounts for recently installed or updated off-the-shelf software and in-house applications to verify there is no test data or test accounts on systems in production.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data examined for this testing procedure.',
                                    name: 'dataExaminedEvidence_6_5_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all accounts examined for this testing procedure.',
                                    name: 'accountsExaminedEvidence_6_5_6',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_7: {
        title: 'Requirement 7: Restrict Access to System Components and Cardholder Data by Business Need to Know',
        descriptions: {
            7.1: {
                title: '<p>7.1 Processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and understood.</p>',
                pciDss: {
                    '7.1.1': {
                        title: '<p>7.1.1 All security policies and operational procedures that are identified in Requirement 7 are:</p>\n        <ul>\n            <li>Documented.</li>\n            <li>Kept up to date.</li>\n            <li>In use.</li>\n            <li>Known to all affected parties.</li>\n        </ul>',
                        names: [
                            'inPlace_7_1_1',
                            'notApplicable_7_1_1',
                            'notTested_7_1_1',
                            'notInPlace_7_1_1',
                            'compensatingControl_7_1_1',
                            'customizedApproach_7_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_7_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>7.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 7 are managed in accordance with all elements specified in this requirement.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExaminedEvidence_7_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_1_1',
                                },
                            },
                        ],
                    },
                    '7.1.2': {
                        title: '<p>7.1.2 Roles and responsibilities for performing activities in Requirement 7 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_7_1_2',
                            'notApplicable_7_1_2',
                            'notTested_7_1_2',
                            'notInPlace_7_1_2',
                            'compensatingControl_7_1_2',
                            'customizedApproach_7_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_7_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>7.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 7 are documented and assigned.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExaminedEvidence_7_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '<p>7.1.2.b Interview personnel with responsibility for performing activities in Requirement 7 to verify that roles and responsibilities are assigned and understood.</p>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            7.2: {
                title: '<p>7.2 Access to system components and data is appropriately defined and assigned.</p>',
                pciDss: {
                    '7.2.1': {
                        title: "<p>7.2.1 An access control model is defined and includes granting access as follows:</p>\n                <ul>\n                    <li>Appropriate access depending on the entity's business and access needs.</li>\n                    <li>Access to system components and data resources that is based on users' job classification and functions.</li>\n                    <li>The least privileges required (for example, user, administrator) to perform a job function.</li>\n                </ul>",
                        names: [
                            'inPlace_7_2_1',
                            'notApplicable_7_2_1',
                            'notTested_7_2_1',
                            'notInPlace_7_2_1',
                            'compensatingControl_7_2_1',
                            'customizedApproach_7_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.1.a Examine documented policies and procedures and interview personnel to verify the access control model is defined in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'documentedPoliciesEvidence_7_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.1.b Examine access control model settings and verify that access needs are appropriately defined in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all access control model settings examined for this testing procedure.',
                                    name: 'accessControlModelSettingsEvidence_7_2_1',
                                },
                            },
                        ],
                    },
                    '7.2.2': {
                        title: '<p>7.2.2 Access is assigned to users, including privileged users, based on:</p>\n                <ul>\n                    <li>Job classification and function.</li>\n                    <li>Least privileges necessary to perform job responsibilities.</li>\n                </ul>',
                        names: [
                            'inPlace_7_2_2',
                            'notApplicable_7_2_2',
                            'notTested_7_2_2',
                            'notInPlace_7_2_2',
                            'compensatingControl_7_2_2',
                            'customizedApproach_7_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.2.a Examine policies and procedures to verify they cover assigning access to users in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.2.b Examine user access settings, including for privileged users, and interview responsible management personnel to verify that privileges assigned are in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all user access settings examined for this testing procedure.',
                                    name: 'userAccessSettingsEvidence_7_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.2.c Interview personnel responsible for assigning access to verify that privileged user access is assigned in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'privilegedUserAccessEvidence_7_2_2',
                                },
                            },
                        ],
                    },
                    '7.2.3': {
                        title: '<p>7.2.3 Required privileges are approved by authorized personnel.</p>',
                        names: [
                            'inPlace_7_2_3',
                            'notApplicable_7_2_3',
                            'notTested_7_2_3',
                            'notInPlace_7_2_3',
                            'compensatingControl_7_2_3',
                            'customizedApproach_7_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.3.a Examine policies and procedures to verify they define processes for approval of all privileges by authorized personnel.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_3',
                                },
                            },
                            {
                                td: {
                                    0: '<p>7.2.3.b Examine user IDs and assigned privileges, and compare with documented approvals to verify that:</p>\n                <ul>\n                    <li>Documented approval exists for the assigned privileges.</li>\n                    <li>The approval was by authorized personnel.</li>\n                    <li>Specified privileges match the roles assigned to the individual.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all user IDs and assigned privileges examined for this testing procedure.',
                                    name: 'userIdsPrivilegesEvidence_7_2_3',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documented approvals examined for this testing procedure.',
                                    name: 'documentedApprovalsEvidence_7_2_3',
                                },
                            },
                        ],
                    },
                    '7.2.4': {
                        title: '<p>7.2.4 All user accounts and related access privileges, including third-party/vendor accounts, are reviewed as follows:</p>\n                <ul>\n                    <li>At least once every six months.</li>\n                    <li>To ensure user accounts and access remain appropriate based on job function.</li>\n                    <li>Any inappropriate access is addressed.</li>\n                    <li>Management acknowledges that access remains appropriate.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_7_2_4',
                            'notApplicable_7_2_4',
                            'notTested_7_2_4',
                            'notInPlace_7_2_4',
                            'compensatingControl_7_2_4',
                            'customizedApproach_7_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.4.a Examine policies and procedures to verify they define processes to review all user accounts and related access privileges, including third-party/vendor accounts, in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_4',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.4.b Interview responsible personnel and examine documented results of periodic reviews of user accounts to verify that all the results are in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the documented results of periodic reviews of user accounts examined for this testing procedure.',
                                    name: 'documentedResultsEvidence_7_2_4',
                                },
                            },
                        ],
                    },
                    '7.2.5': {
                        title: '<p>7.2.5 All application and system accounts and related access privileges are assigned and managed as follows:</p>\n                <ul>\n                    <li>Based on the least privileges necessary for the operability of the system or application.</li>\n                    <li>Access is limited to the systems, applications, or processes that specifically require their use.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_7_2_5',
                            'notApplicable_7_2_5',
                            'notTested_7_2_5',
                            'notInPlace_7_2_5',
                            'compensatingControl_7_2_5',
                            'customizedApproach_7_2_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.5.a Examine policies and procedures to verify they define processes to manage and assign application and system accounts and related access privileges in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_5',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.5.b Examine privileges associated with system and application accounts and interview responsible personnel to verify that application and system accounts and related access privileges are assigned and managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all privileges associated with system and application accounts examined for this testing procedure.',
                                    name: 'privilegesEvidence_7_2_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_5',
                                },
                            },
                        ],
                    },
                    '7.2.5.1': {
                        title: "<p>7.2.5.1 All access by application and system accounts and related access privileges are reviewed as follows:</p>\n                <ul>\n                    <li>Periodically (at the frequency defined in the entity's targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1).</li>\n                    <li>The application/system access remains appropriate for the function being performed.</li>\n                    <li>Any inappropriate access is addressed.</li>\n                    <li>Management acknowledges that access remains appropriate.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>",
                        names: [
                            'inPlace_7_2_5_1',
                            'notApplicable_7_2_5_1',
                            'notTested_7_2_5_1',
                            'notInPlace_7_2_5_1',
                            'compensatingControl_7_2_5_1',
                            'customizedApproach_7_2_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.5.1.a Examine policies and procedures to verify they define processes to review all application and system accounts and related access privileges in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.5.1.b Examine the entity’s targeted risk analysis for the frequency of periodic reviews of application and system accounts and related access privileges to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysisEvidence_7_2_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.5.1.c Interview responsible personnel and examine documented results of periodic reviews of system and application accounts and related privileges to verify that the reviews occur in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_5_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documented results of periodic reviews examined for this testing procedure.',
                                    name: 'documentedResultsEvidence_7_2_5_1',
                                },
                            },
                        ],
                    },
                    '7.2.6': {
                        title: '<p>7.2.6 All user access to query repositories of stored cardholder data is restricted as follows:</p>\n                <ul>\n                    <li>Via applications or other programmatic methods, with access and allowed actions based on user roles and least privileges.</li>\n                    <li>Only the responsible administrator(s) can directly access or query repositories of stored CHD.</li>\n                </ul>',
                        names: [
                            'inPlace_7_2_6',
                            'notApplicable_7_2_6',
                            'notTested_7_2_6',
                            'notInPlace_7_2_6',
                            'compensatingControl_7_2_6',
                            'customizedApproach_7_2_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_2_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.2.6.a Examine policies and procedures and interview personnel to verify processes are defined for granting user access to query repositories of stored cardholder data, in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProceduresEvidence_7_2_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedEvidence_7_2_6',
                                },
                            },
                            {
                                td: {
                                    0: '7.2.6.b Examine configuration settings for querying repositories of stored cardholder data to verify they are in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsEvidence_7_2_6',
                                },
                            },
                        ],
                    },
                },
            },
            7.3: {
                title: '<p>7.3 Access to system components and data is managed via an access control system(s).</p>',
                pciDss: {
                    '7.3.1': {
                        title: '<p>7.3.1 An access control system(s) is in place that restricts access based on a user’s need to know and covers all system components.</p>',
                        names: [
                            'inPlace_7_3_1',
                            'notApplicable_7_3_1',
                            'notTested_7_3_1',
                            'notInPlace_7_3_1',
                            'compensatingControl_7_3_1',
                            'customizedApproach_7_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.3.1 Examine vendor documentation and system settings to verify that access is managed for each system component via an access control system(s) that restricts access based on a user’s need to know and covers all system components.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_7_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettingsEvidence_7_3_1',
                                },
                            },
                        ],
                    },
                    '7.3.2': {
                        title: '<p>7.3.2 The access control system(s) is configured to enforce permissions assigned to individuals, applications, and systems based on job classification and function.</p>',
                        names: [
                            'inPlace_7_3_2',
                            'notApplicable_7_3_2',
                            'notTested_7_3_2',
                            'notInPlace_7_3_2',
                            'compensatingControl_7_3_2',
                            'customizedApproach_7_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.3.2 Examine vendor documentation and system settings to verify that the access control system(s) is configured to enforce permissions assigned to individuals, applications, and systems based on job classification and function.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_7_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettingsEvidence_7_3_2',
                                },
                            },
                        ],
                    },
                    '7.3.3': {
                        title: '<p>7.3.3 The access control system(s) is set to “deny all” by default.</p>',
                        names: [
                            'inPlace_7_3_3',
                            'notApplicable_7_3_3',
                            'notTested_7_3_3',
                            'notInPlace_7_3_3',
                            'compensatingControl_7_3_3',
                            'customizedApproach_7_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_7_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '7.3.3 Examine vendor documentation and system settings to verify that the access control system(s) is set to “deny all” by default.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentationEvidence_7_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettingsEvidence_7_3_3',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_8: {
        title: 'Requirement 8: Identify Users and Authenticate Access to System Components',
        descriptions: {
            8.1: {
                title: '<p>8.1 Processes and mechanisms for identifying users and authenticating access to system components are defined and understood.</p>',
                pciDss: {
                    '8.1.1': {
                        title: '<p>8.1.1 All security policies and operational procedures that are identified in Requirement 8 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_8_1_1',
                            'notApplicable_8_1_1',
                            'notTested_8_1_1',
                            'notInPlace_8_1_1',
                            'compensatingControl_8_1_1',
                            'customizedApproach_8_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures that are identified in Requirement 8 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationEvidence_8_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_8_1_1',
                                },
                            },
                        ],
                    },
                    '8.1.2': {
                        title: '<p>8.1.2 Roles and responsibilities for performing activities in Requirement 8 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_8_1_2',
                            'notApplicable_8_1_2',
                            'notTested_8_1_2',
                            'notInPlace_8_1_2',
                            'compensatingControl_8_1_2',
                            'customizedApproach_8_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 8 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'rolesDocumentationEvidence_8_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.1.2.b Interview personnel with responsibility for performing activities in Requirement 8 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsEvidence_8_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            8.2: {
                title: '<p>8.2 User identification and related accounts for users and administrators are strictly managed throughout an account’s lifecycle.</p>',
                pciDss: {
                    '8.2.1': {
                        title: '<p>8.2.1 All users are assigned a unique ID before access to system components or cardholder data is allowed.</p>',
                        names: [
                            'inPlace_8_2_1',
                            'notApplicable_8_2_1',
                            'notTested_8_2_1',
                            'notInPlace_8_2_1',
                            'compensatingControl_8_2_1',
                            'customizedApproach_8_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.1.a Interview responsible personnel to verify that all users are assigned a unique ID for access to system components and cardholder data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'uniqueIDInterviewsEvidence_8_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.2.1.b Examine audit logs and other evidence to verify that access to system components and cardholder data can be uniquely identified and associated with individuals.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'auditLogsEvidence_8_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for any other evidence examined for this testing procedure.',
                                    name: 'otherEvidence_8_2_1',
                                },
                            },
                        ],
                    },
                    '8.2.2': {
                        title: '<p>8.2.2 Group, shared, or generic IDs, or other shared authentication credentials are only used when necessary on an exception basis, and are managed as follows:</p>\n                <ul>\n                    <li>ID use is prevented unless needed for an exceptional circumstance.</li>\n                    <li>Use is limited to the time needed for the exceptional circumstance.</li>\n                    <li>Business justification for use is documented.</li>\n                    <li>Use is explicitly approved by management.</li>\n                    <li>Individual user identity is confirmed before access to an account is granted.</li>\n                    <li>Every action taken is attributable to an individual user.</li>\n                </ul>',
                        names: [
                            'inPlace_8_2_2',
                            'notApplicable_8_2_2',
                            'notTested_8_2_2',
                            'notInPlace_8_2_2',
                            'compensatingControl_8_2_2',
                            'customizedApproach_8_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.2.a Examine user account lists on system components and applicable documentation to verify that shared authentication credentials are only used when necessary, on an exception basis, and are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all user account lists examined for this testing procedure.',
                                    name: 'sharedAuthAccountListsEvidence_8_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'identifyDocumentationExamined_8_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.2.2.b Examine authentication policies and procedures to verify processes are defined for shared authentication credentials such that they are only used when necessary, on an exception basis, and are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all authentication policies and procedures examined for this testing procedure.',
                                    name: 'authPoliciesEvidence_8_2_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.2.2.c Interview system administrators to verify that shared authentication credentials are only used when necessary, on an exception basis, and are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'sharedAuthInterviewsEvidence_8_2_2',
                                },
                            },
                        ],
                    },
                    '8.2.3': {
                        title: '<p>8.2.3 Additional requirement for service providers only: Service providers with remote access to customer premises use unique authentication factors for each customer premises.</p>',
                        names: [
                            'inPlace_8_2_3',
                            'notApplicable_8_2_3',
                            'notTested_8_2_3',
                            'notInPlace_8_2_3',
                            'compensatingControl_8_2_3',
                            'customizedApproach_8_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.3 Additional testing procedure for service provider assessments only: Examine authentication policies and procedures and interview personnel to verify that service providers with remote access to customer premises use unique authentication factors for remote access to each customer premises.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all authentication policies and procedures examined for this testing procedure.',
                                    name: 'authPoliciesEvidence_8_2_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'remoteAccessInterviewsEvidence_8_2_3',
                                },
                            },
                        ],
                    },
                    '8.2.4': {
                        title: '<p>8.2.4 Addition, deletion, and modification of user IDs, authentication factors, and other identifier objects are managed as follows:</p>\n                <ul>\n                    <li>Authorized with the appropriate approval.</li>\n                    <li>Implemented with only the privileges specified on the documented approval.</li>\n                </ul>',
                        names: [
                            'inPlace_8_2_4',
                            'notApplicable_8_2_4',
                            'notTested_8_2_4',
                            'notInPlace_8_2_4',
                            'compensatingControl_8_2_4',
                            'customizedApproach_8_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.4 Examine documented authorizations across various phases of the account lifecycle (additions, modifications, and deletions) and examine system settings to verify the activity has been managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented authorizations examined for this testing procedure.',
                                    name: 'authExaminedEvidence_8_2_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettingsEvidence_8_2_4',
                                },
                            },
                        ],
                    },
                    '8.2.5': {
                        title: '<p>8.2.5 Access for terminated users is immediately revoked.</p>',
                        names: [
                            'inPlace_8_2_5',
                            'notApplicable_8_2_5',
                            'notTested_8_2_5',
                            'notInPlace_8_2_5',
                            'compensatingControl_8_2_5',
                            'customizedApproach_8_2_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.5.a Examine information sources for terminated users and review current user access lists—for both local and remote access—to verify that terminated user IDs have been deactivated or removed from the access lists.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all information sources examined for this testing procedure.',
                                    name: 'terminatedUsersInfoSource_8_2_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all current user access lists examined for this testing procedure.',
                                    name: 'currentUserAccessLists_8_2_5',
                                },
                            },
                            {
                                td: {
                                    0: '8.2.5.b Interview responsible personnel to verify that all physical authentication factors—such as smart cards, tokens, etc.—have been returned or deactivated for terminated users.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsForTerminatedUsers_8_2_5',
                                },
                            },
                        ],
                    },
                    '8.2.6': {
                        title: '<p>8.2.6 Inactive user accounts are removed or disabled within 90 days of inactivity.</p>',
                        names: [
                            'inPlace_8_2_6',
                            'notApplicable_8_2_6',
                            'notTested_8_2_6',
                            'notInPlace_8_2_6',
                            'compensatingControl_8_2_6',
                            'customizedApproach_8_2_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.6 Examine user accounts and last logon information, and interview personnel to verify that any inactive user accounts are removed or disabled within 90 days of inactivity.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all user accounts and last login information examined for this testing procedure.',
                                    name: 'inactiveUserAccounts_8_2_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsForInactiveUsers_8_2_6',
                                },
                            },
                        ],
                    },
                    '8.2.7': {
                        title: '<p>8.2.7 Accounts used by third parties to access, support, or maintain system components via remote access are managed as follows:</p>\n                <ul>\n                    <li>Enabled only during the time period needed and disabled when not in use.</li>\n                    <li>Use is monitored for unexpected activity.</li>\n                </ul>',
                        names: [
                            'inPlace_8_2_7',
                            'notApplicable_8_2_7',
                            'notTested_8_2_7',
                            'notInPlace_8_2_7',
                            'compensatingControl_8_2_7',
                            'customizedApproach_8_2_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.7 Interview personnel, examine documentation for managing accounts, and examine evidence to verify that accounts used by third parties for remote access are managed according to all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'thirdPartyAccountsInterviews_8_2_7',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'thirdPartyAccountsDocumentation_8_2_7',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for any other evidence examined for this testing procedure.',
                                    name: 'thirdPartyAccountsOtherEvidence_8_2_7',
                                },
                            },
                        ],
                    },
                    '8.2.8': {
                        title: '<p>8.2.8 If a user session has been idle for more than 15 minutes, the user is required to re-authenticate to re-activate the terminal or session.</p>',
                        names: [
                            'inPlace_8_2_8',
                            'notApplicable_8_2_8',
                            'notTested_8_2_8',
                            'notInPlace_8_2_8',
                            'compensatingControl_8_2_8',
                            'customizedApproach_8_2_8',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_2_8',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.2.8 Examine system configuration settings to verify that system/session idle timeout features for user sessions have been set to 15 minutes or less.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'sessionIdleTimeoutSettings_8_2_8',
                                },
                            },
                        ],
                    },
                },
            },
            8.3: {
                title: '<p>8.3 Strong authentication for users and administrators is established and managed.</p>',
                pciDss: {
                    '8.3.1': {
                        title: '<p>8.3.1 All user access to system components for users and administrators is authenticated via at least one of the following authentication factors:</p>\n                <ul>\n                    <li>Something you know, such as a password or passphrase.</li>\n                    <li>Something you have, such as a token device or smart card.</li>\n                    <li>Something you are, such as a biometric element.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_1',
                            'notApplicable_8_3_1',
                            'notTested_8_3_1',
                            'notInPlace_8_3_1',
                            'compensatingControl_8_3_1',
                            'customizedApproach_8_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.1.a Examine documentation describing the authentication factor(s) used to verify that user access to system components is authenticated via at least one authentication factor specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'authenticationFactorsDocumentation_8_3_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.1.b For each type of authentication factor used with each type of system component, observe an authentication to verify that authentication is functioning consistently with documented authentication factor(s).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of each type of authentication factor used for this testing procedure.',
                                    name: 'authenticationObservationEvidence_8_3_1',
                                },
                            },
                        ],
                    },
                    '8.3.2': {
                        title: '<p>8.3.2 Strong cryptography is used to render all authentication factors unreadable during transmission and storage on all system components.</p>',
                        names: [
                            'inPlace_8_3_2',
                            'notApplicable_8_3_2',
                            'notTested_8_3_2',
                            'notInPlace_8_3_2',
                            'compensatingControl_8_3_2',
                            'customizedApproach_8_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.2.a Examine vendor documentation and system configuration settings to verify that authentication factors are rendered unreadable with strong cryptography during transmission and storage.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocumentation_8_3_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettings_8_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.2.b Examine repositories of authentication factors to verify that they are unreadable during storage.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all repositories of authentication factors examined for this testing procedure.',
                                    name: 'repositoriesExamined_8_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.2.c Examine data transmissions to verify that authentication factors are unreadable during transmission.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all data transmissions examined for this testing procedure.',
                                    name: 'dataTransmissionsExamined_8_3_2',
                                },
                            },
                        ],
                    },
                    '8.3.3': {
                        title: '<p>8.3.3 User identity is verified before modifying any authentication factor.</p>',
                        names: [
                            'inPlace_8_3_3',
                            'notApplicable_8_3_3',
                            'notTested_8_3_3',
                            'notInPlace_8_3_3',
                            'compensatingControl_8_3_3',
                            'customizedApproach_8_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.3 Examine procedures for modifying authentication factors and observe security personnel to verify that when a user requests a modification of an authentication factor, the user’s identity is verified before the authentication factor is modified.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all procedures examined for this testing procedure.',
                                    name: 'proceduresExamined_8_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of security personnel for this testing procedure.',
                                    name: 'observationsSecurityPersonnel_8_3_3',
                                },
                            },
                        ],
                    },
                    '8.3.4': {
                        title: '<p>8.3.4 Invalid authentication attempts are limited by:</p>\n                <ul>\n                    <li>Locking out the user ID after not more than 10 attempts.</li>\n                    <li>Setting the lockout duration to a minimum of 30 minutes or until the user’s identity is confirmed.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_4',
                            'notApplicable_8_3_4',
                            'notTested_8_3_4',
                            'notInPlace_8_3_4',
                            'compensatingControl_8_3_4',
                            'customizedApproach_8_3_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.4.a Examine system configuration settings to verify that authentication parameters are set to require that user accounts be locked out after not more than 10 invalid logon attempts.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigSettings_8_3_4_a',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.4.b Examine system configuration settings to verify that password parameters are set to require that once a user account is locked out, it remains locked for a minimum of 30 minutes or until the user’s identity is confirmed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigSettings_8_3_4_b',
                                },
                            },
                        ],
                    },
                    '8.3.5': {
                        title: '<p>8.3.5 If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they are set and reset for each user as follows:</p>\n                <ul>\n                    <li>Set to a unique value for first-time use and upon reset.</li>\n                    <li>Forced to be changed immediately after the first use.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_5',
                            'notApplicable_8_3_5',
                            'notTested_8_3_5',
                            'notInPlace_8_3_5',
                            'compensatingControl_8_3_5',
                            'customizedApproach_8_3_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.5 Examine procedures for setting and resetting passwords/passphrases (if used as authentication factors to meet Requirement 8.3.1) and observe security personnel to verify that passwords/passphrases are set and reset in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all procedures examined for this testing procedure.',
                                    name: 'proceduresExamined_8_3_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of security personnel for this testing procedure.',
                                    name: 'observationsOfSecurityPersonnel_8_3_5',
                                },
                            },
                        ],
                    },
                    '8.3.6': {
                        title: '<p>8.3.6 If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they meet the following minimum level of complexity:</p>\n                <ul>\n                    <li>A minimum length of 12 characters (or IF the system does not support 12 characters, a minimum length of eight characters).</li>\n                    <li>Contain both numeric and alphabetic characters.</li>\n                </ul>\n                <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment. Until 31 March 2025, passwords must be a minimum length of seven characters in accordance with PCI DSS v3.2.1 Requirement 8.2.3.</i></p>',
                        names: [
                            'inPlace_8_3_6',
                            'notApplicable_8_3_6',
                            'notTested_8_3_6',
                            'notInPlace_8_3_6',
                            'compensatingControl_8_3_6',
                            'customizedApproach_8_3_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.6 Examine system configuration settings to verify that user password/passphrase complexity parameters are set in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettingsExamined_8_3_6',
                                },
                            },
                        ],
                    },
                    '8.3.7': {
                        title: '<p>8.3.7 Individuals are not allowed to submit a new password/passphrase that is the same as any of the last four passwords/passphrases used.</p>',
                        names: [
                            'inPlace_8_3_7',
                            'notApplicable_8_3_7',
                            'notTested_8_3_7',
                            'notInPlace_8_3_7',
                            'compensatingControl_8_3_7',
                            'customizedApproach_8_3_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.7 Examine system configuration settings to verify that password parameters are set to require that new passwords/passphrases cannot be the same as the four previously used passwords/passphrases.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettingsExamined_8_3_7',
                                },
                            },
                        ],
                    },
                    '8.3.8': {
                        title: '<p>8.3.8 Authentication policies and procedures are documented and communicated to all users, including:</p>\n                <ul>\n                    <li>Guidance on selecting strong authentication factors.</li>\n                    <li>Guidance for how users should protect their authentication factors.</li>\n                    <li>Instructions not to reuse previously used passwords/passphrases.</li>\n                    <li>Instructions to change passwords/passphrases if there is any suspicion or knowledge that they have been compromised, and how to report the incident.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_8',
                            'notApplicable_8_3_8',
                            'notTested_8_3_8',
                            'notInPlace_8_3_8',
                            'compensatingControl_8_3_8',
                            'customizedApproach_8_3_8',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_8',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.8.a Examine procedures and interview personnel to verify that authentication policies and procedures are distributed to all users.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all procedures examined for this testing procedure.',
                                    name: 'proceduresExamined_8_3_8',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_8_3_8',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.8.b Review authentication policies and procedures that are distributed to users and verify they include the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all authentication policies and procedures examined for this testing procedure.',
                                    name: 'authenticationPoliciesExamined_8_3_8',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.8.c Interview users to verify that they are familiar with authentication policies and procedures.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'userInterviewsConducted_8_3_8',
                                },
                            },
                        ],
                    },
                    '8.3.9': {
                        title: '<p>8.3.9 If passwords/passphrases are used as the only authentication factor for user access (i.e., in any single-factor authentication implementation), then either:</p>\n                <ul>\n                    <li>Passwords/passphrases are changed at least once every 90 days, <b>OR</b></li>\n                    <li>The security posture of accounts is dynamically analyzed, and real-time access to resources is automatically determined accordingly.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_9',
                            'notApplicable_8_3_9',
                            'notTested_8_3_9',
                            'notInPlace_8_3_9',
                            'compensatingControl_8_3_9',
                            'customizedApproach_8_3_9',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_9',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.9 If passwords/passphrases are used as the only authentication factor for user access, inspect system configuration settings to verify that passwords/passphrases are managed in accordance with ONE of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationExamined_8_3_9',
                                },
                            },
                        ],
                    },
                    '8.3.10': {
                        title: '<p>8.3.10 Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access to cardholder data (i.e., in any single-factor authentication implementation), then guidance is provided to customer users including:</p>\n                <ul>\n                    <li>Guidance for customers to change their user passwords/passphrases periodically.</li>\n                    <li>Guidance as to when, and under what circumstances, passwords/passphrases are to be changed.</li>\n                </ul>\n                <i><b>Note:</b> This requirement for service providers will be superseded by Requirement 8.3.10.1 as of 31 March 2025.</i>',
                        names: [
                            'inPlace_8_3_10',
                            'notApplicable_8_3_10',
                            'notTested_8_3_10',
                            'notInPlace_8_3_10',
                            'compensatingControl_8_3_10',
                            'customizedApproach_8_3_10',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_10',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.10 Additional testing procedure for service provider assessments only: If passwords/passphrases are used as the only authentication factor for customer user access to cardholder data, examine guidance provided to customer users to verify that the guidance includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all guidance provided to customer users examined for this testing procedure.',
                                    name: 'guidanceProvidedExamined_8_3_10',
                                },
                            },
                        ],
                    },
                    '8.3.10.1': {
                        title: '<p>8.3.10.1 Additional requirement for service providers only: If passwords/passphrases are used as the only authentication factor for customer user access (i.e., in any single-factor authentication implementation) then either:</p>\n                <ul>\n                    <li>Passwords/passphrases are changed at least once every 90 days,</li>\n                    <li>The security posture of accounts is dynamically analyzed, and real-time access to resources is automatically determined accordingly.</li>\n                </ul>\n                <i><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment. Until this requirement is effective on 31 March 2025, service providers may meet either Requirement 8.3.10 or 8.3.10.1.</i>',
                        names: [
                            'inPlace_8_3_10_1',
                            'notApplicable_8_3_10_1',
                            'notTested_8_3_10_1',
                            'notInPlace_8_3_10_1',
                            'compensatingControl_8_3_10_1',
                            'customizedApproach_8_3_10_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_10_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.10.1 Additional testing procedure for service provider assessments only: If passwords/passphrases are used as the only authentication factor for customer user access, inspect system configuration settings to verify that passwords/passphrases are managed in accordance with ONE of the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettingsExamined_8_3_10_1',
                                },
                            },
                        ],
                    },
                    '8.3.11': {
                        title: '<p>8.3.11 Where authentication factors such as physical or logical security tokens, smart cards, or certificates are used:</p>\n                <ul>\n                    <li>Factors are assigned to an individual user and not shared among multiple users.</li>\n                    <li>Physical and/or logical controls ensure only the intended user can use that factor to gain access.</li>\n                </ul>',
                        names: [
                            'inPlace_8_3_11',
                            'notApplicable_8_3_11',
                            'notTested_8_3_11',
                            'notInPlace_8_3_11',
                            'compensatingControl_8_3_11',
                            'customizedApproach_8_3_11',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_3_11',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.3.11.a Examine authentication policies and procedures to verify that procedures for using authentication factors such as physical security tokens, smart cards, and certificates are defined and include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all authentication policies and procedures examined for this testing procedure.',
                                    name: 'authenticationPoliciesExamined_8_3_11',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.11.b Interview security personnel to verify authentication factors are assigned to an individual user and not shared among multiple users.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'securityInterviewsConducted_8_3_11',
                                },
                            },
                            {
                                td: {
                                    0: '8.3.11.c Examine system configuration settings and/or observe physical controls, as applicable, to verify that controls are implemented to ensure only the intended user can use that factor to gain access.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettingsExamined_8_3_11',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of physical controls conducted for this testing procedure.',
                                    name: 'observationsPhysicalControls_8_3_11',
                                },
                            },
                        ],
                    },
                },
            },
            8.4: {
                title: '<p>8.4 Multi-factor authentication (MFA) is implemented to secure access into the CDE.</p>',
                pciDss: {
                    '8.4.1': {
                        title: '<p>8.4.1 MFA is implemented for all non-console access into the CDE for personnel with administrative access.</p>',
                        names: [
                            'inPlace_8_4_1',
                            'notApplicable_8_4_1',
                            'notTested_8_4_1',
                            'notInPlace_8_4_1',
                            'compensatingControl_8_4_1',
                            'customizedApproach_8_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.4.1.a Examine network and/or system configurations to verify MFA is required for all non-console access into the CDE for personnel with administrative access.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network and/or system configurations examined for this testing procedure.',
                                    name: 'networkSystemConfigurationsExamined_8_4_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.4.1.b Observe administrator personnel logging into the CDE and verify that MFA is required.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of administrator personnel logging into the CDE for this testing procedure.',
                                    name: 'observationsAdministratorLogin_8_4_1',
                                },
                            },
                        ],
                    },
                    '8.4.2': {
                        title: '<p>8.4.2 MFA is implemented for all non-console access into the CDE.</p>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_8_4_2',
                            'notApplicable_8_4_2',
                            'notTested_8_4_2',
                            'notInPlace_8_4_2',
                            'compensatingControl_8_4_2',
                            'customizedApproach_8_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.4.2.a Examine network and/or system configurations to verify MFA is implemented for all non-console access into the CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network and/or system configurations examined for this testing procedure.',
                                    name: 'networkSystemConfigurationsExamined_8_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.4.2.b Observe personnel logging in to the CDE and examine evidence to verify that MFA is required.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of personnel logging into the CDE for this testing procedure.',
                                    name: 'observationsPersonnelLogin_8_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for any additional evidence examined for this testing procedure.',
                                    name: 'additionalEvidenceExamined_8_4_2',
                                },
                            },
                        ],
                    },
                    '8.4.3': {
                        title: '<p>8.4.3 MFA is implemented for all remote access originating from outside the entity’s network that could access or impact the CDE.</p>',
                        names: [
                            'inPlace_8_4_3',
                            'notApplicable_8_4_3',
                            'notTested_8_4_3',
                            'notInPlace_8_4_3',
                            'compensatingControl_8_4_3',
                            'customizedApproach_8_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.4.3.a Examine network and/or system configurations for remote access servers and systems to verify MFA is required in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all network and/or system configurations examined for this testing procedure.',
                                    name: 'networkSystemConfigurationsExamined_8_4_3',
                                },
                            },
                            {
                                td: {
                                    0: '8.4.3.b Observe personnel (for example, users and administrators) and third parties connecting remotely to the network and verify that multi-factor authentication is required.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of personnel connecting remotely to the network for this testing procedure.',
                                    name: 'observationsPersonnelRemoteConnection_8_4_3',
                                },
                            },
                        ],
                    },
                },
            },
            8.5: {
                title: '<p>8.5 Multi-factor authentication (MFA) systems are configured to prevent misuse.</p>',
                pciDss: {
                    '8.5.1': {
                        title: '<p>8.5.1 MFA systems are implemented as follows:</p>\n                <ul>\n                    <li>The MFA system is not susceptible to replay attacks.</li>\n                    <li>MFA systems cannot be bypassed by any users, including administrative users unless specifically documented, and authorized by management on an exception basis, for a limited time period.</li>\n                    <li>At least two different types of authentication factors are used.</li>\n                    <li>Success of all authentication factors is required before access is granted.</li>\n                </ul>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_8_5_1',
                            'notApplicable_8_5_1',
                            'notTested_8_5_1',
                            'notInPlace_8_5_1',
                            'compensatingControl_8_5_1',
                            'customizedApproach_8_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.5.1.a Examine vendor system documentation to verify that the MFA system is not susceptible to replay attacks.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all vendor system documentation examined for this testing procedure.',
                                    name: 'vendorSystemDocumentationExamined_8_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.5.1.b Examine system configurations for the MFA implementation to verify it is configured in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsExamined_8_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.5.1.c Interview responsible personnel and observe processes to verify that any requests to bypass MFA are specifically documented and authorized by management on an exception basis, for a limited time period.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_8_5_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'interviewsConductedobservationsProcesses_8_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.5.1.d Observe personnel logging into system components in the CDE to verify that access is granted only after all authentication factors are successful.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of personnel logging into system components in the CDE for this testing procedure.',
                                    name: 'observationsPersonnelCDE_8_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '8.5.1.e Observe personnel connecting remotely from outside the entity’s network to verify that access is granted only after all authentication factors are successful.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of personnel connecting remotely from outside the entity’s network for this testing procedure.',
                                    name: 'observationsPersonnelRemoteAccess_8_5_1',
                                },
                            },
                        ],
                    },
                },
            },
            8.6: {
                title: '<p>8.6 Use of application and system accounts and associated authentication factors is strictly managed.</p>',
                pciDss: {
                    '8.6.1': {
                        title: '<p>8.6.1 If accounts used by systems or applications can be used for interactive login, they are managed as follows:</p>\n                <ul>\n                    <li>Interactive use is prevented unless needed for an exceptional circumstance.</li>\n                    <li>Interactive use is limited to the time needed for the exceptional circumstance.</li>\n                    <li>Business justification for interactive use is documented.</li>\n                    <li>Interactive use is explicitly approved by management.</li>\n                    <li>Individual user identity is confirmed before access to account is granted.</li>\n                    <li>Every action taken is attributable to an individual user.</li>\n                </ul>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_8_6_1',
                            'notApplicable_8_6_1',
                            'notTested_8_6_1',
                            'notInPlace_8_6_1',
                            'compensatingControl_8_6_1',
                            'customizedApproach_8_6_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_6_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.6.1 Examine application and system accounts that can be used interactively and interview administrative personnel to verify that application and system accounts are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all application and system accounts examined for this testing procedure.',
                                    name: 'applicationSystemAccountsExamined_8_6_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_8_6_1',
                                },
                            },
                        ],
                    },
                    '8.6.2': {
                        title: '<p>8.6.2 Passwords/passphrases for any application and system accounts that can be used for interactive login are not hard coded in scripts, configuration/property files, or bespoke and custom source code.</p>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_8_6_2',
                            'notApplicable_8_6_2',
                            'notTested_8_6_2',
                            'notInPlace_8_6_2',
                            'compensatingControl_8_6_2',
                            'customizedApproach_8_6_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_6_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.6.2.a Interview personnel and examine system development procedures to verify that processes are defined for application and system accounts that can be used for interactive login, specifying that passwords/passphrases are not hard coded in scripts, configuration/property files, or bespoke and custom source code.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_8_6_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system development procedures examined for this testing procedure.',
                                    name: 'systemDevelopmentProceduresExamined_8_6_2',
                                },
                            },
                            {
                                td: {
                                    0: '8.6.2.b Examine scripts, configuration/property files, and bespoke and custom source code for application and system accounts that can be used for interactive login, to verify passwords/passphrases for those accounts are not present.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all scripts, configuration/property files, and bespoke and custom source code examined for this testing procedure.',
                                    name: 'scriptsExamined_8_6_2',
                                },
                            },
                        ],
                    },
                    '8.6.3': {
                        title: '<p>8.6.3 Passwords/passphrases for any application and system accounts are protected against misuse as follows:</p>\n                <ul>\n                    <li>Passwords/passphrases are changed periodically (at the frequency defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1) and upon suspicion or confirmation of compromise.</li>\n                    <li>Passwords/passphrases are constructed with sufficient complexity appropriate for how frequently the entity changes the passwords/passphrases.</li>\n                </ul>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_8_6_3',
                            'notApplicable_8_6_3',
                            'notTested_8_6_3',
                            'notInPlace_8_6_3',
                            'compensatingControl_8_6_3',
                            'customizedApproach_8_6_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_8_6_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '8.6.3.a Examine policies and procedures to verify that procedures are defined to protect passwords/passphrases for application or system accounts against misuse in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesExamined_8_6_3',
                                },
                            },
                            {
                                td: {
                                    0: '8.6.3.b Examine the entity’s targeted risk analysis for the change frequency and complexity for passwords/passphrases for application and system accounts to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1 and addresses: \n                <ul>\n                    <li>The frequency defined for periodic changes to application and system passwords/passphrases.</li>\n                    <li>The complexity defined for passwords/passphrases and appropriateness of the complexity relative to the frequency of changes.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'riskAnalysisExamined_8_6_3',
                                },
                            },
                            {
                                td: {
                                    0: '8.6.3.c Interview responsible personnel and examine system configuration settings to verify that passwords/passphrases for any application and system accounts are protected against misuse in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_8_6_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'systemConfigurationSettingsExamined_8_6_3',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_9: {
        title: 'Requirement 9: Restrict Physical Access to Cardholder Data',
        descriptions: {
            9.1: {
                title: '<p>9.1 Processes and mechanisms for restricting physical access to cardholder data are defined and understood.</p>',
                pciDss: {
                    '9.1.1': {
                        title: '<p>9.1.1 All security policies and operational procedures that are identified in Requirement 9 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_9_1_1',
                            'notApplicable_9_1_1',
                            'notTested_9_1_1',
                            'notInPlace_9_1_1',
                            'compensatingControl_9_1_1',
                            'customizedApproach_9_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 9 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_1_1',
                                },
                            },
                        ],
                    },
                    '9.1.2': {
                        title: '<p>9.1.2 Roles and responsibilities for performing activities in Requirement 9 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_9_1_2',
                            'notApplicable_9_1_2',
                            'notTested_9_1_2',
                            'notInPlace_9_1_2',
                            'compensatingControl_9_1_2',
                            'customizedApproach_9_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 9 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '9.1.2.b Interview personnel with responsibility for performing activities in Requirement 9 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            9.2: {
                title: '<p>9.2 Physical access controls manage entry into facilities and systems containing cardholder data.</p>',
                pciDss: {
                    '9.2.1': {
                        title: '<p>9.2.1 Appropriate facility entry controls are in place to restrict physical access to systems in the CDE.</p>',
                        names: [
                            'inPlace_9_2_1',
                            'notApplicable_9_2_1',
                            'notTested_9_2_1',
                            'notInPlace_9_2_1',
                            'compensatingControl_9_2_1',
                            'customizedApproach_9_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.2.1 Observe entry controls and interview responsible personnel to verify that physical security controls are in place to restrict access to systems in the CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the entry controls for this testing procedure.',
                                    name: 'observationsEntryControls_9_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_2_1',
                                },
                            },
                        ],
                    },
                    '9.2.1.1': {
                        title: '<p>9.2.1.1 Individual physical access to sensitive areas within the CDE is monitored with either video cameras or physical access control mechanisms (or both) as follows:</p>\n                <ul>\n                    <li>Entry and exit points to/from sensitive areas within the CDE are monitored.</li>\n                    <li>Monitoring devices or mechanisms are protected from tampering or disabling.</li>\n                    <li>Collected data is reviewed and correlated with other entries.</li>\n                    <li>Collected data is stored for at least three months, unless otherwise restricted by law.</li>\n                </ul>',
                        names: [
                            'inPlace_9_2_1_1',
                            'notApplicable_9_2_1_1',
                            'notTested_9_2_1_1',
                            'notInPlace_9_2_1_1',
                            'compensatingControl_9_2_1_1',
                            'customizedApproach_9_2_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_2_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.2.1.1.a Observe locations where individual physical access to sensitive areas within the CDE occurs to verify that either video cameras or physical access control mechanisms (or both) are in place to monitor the entry and exit points.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of locations where individual physical access to sensitive areas within the CDE occurs for this testing procedure.',
                                    name: 'observationsEntryPoints_9_2_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.2.1.1.b Observe locations where individual physical access to sensitive areas within the CDE occurs to verify that either video cameras or physical access control mechanisms (or both) are protected from tampering or disabling.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of locations where individual physical access to the CDE occurs for this testing procedure.',
                                    name: 'tamperProtectionVerification_9_2_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.2.1.1.c Observe the physical access control mechanisms and/or examine video cameras and interview responsible personnel to verify that:\n                <ul>\n                    <li>Collected data from video cameras and/or physical access control mechanisms is reviewed and correlated with other entries.</li>\n                    <li>Collected data is stored for at least three months.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the physical access control mechanisms for this testing procedure.',
                                    name: 'reviewCollectedData_9_2_1_1',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all video cameras examined for this testing procedure.',
                                    name: 'videoCamerasExamined_9_2_1_1',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_2_1_1',
                                },
                            },
                        ],
                    },
                    '9.2.2': {
                        title: '<p>9.2.2 Physical and/or logical controls are implemented to restrict use of publicly accessible network jacks within the facility.</p>',
                        names: [
                            'inPlace_9_2_2',
                            'notApplicable_9_2_2',
                            'notTested_9_2_2',
                            'notInPlace_9_2_2',
                            'compensatingControl_9_2_2',
                            'customizedApproach_9_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.2.2 Interview responsible personnel and observe locations of publicly accessible network jacks to verify that physical and/or logical controls are in place to restrict access to publicly accessible network jacks within the facility.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_2_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of the locations of publicly accessible network jacks for this testing procedure.',
                                    name: 'observationsNetworkJacks_9_2_2',
                                },
                            },
                        ],
                    },
                    '9.2.3': {
                        title: '<p>9.2.3 Physical access to wireless access points, gateways, networking/communications hardware, and telecommunication lines within the facility is restricted.</p>',
                        names: [
                            'inPlace_9_2_3',
                            'notApplicable_9_2_3',
                            'notTested_9_2_3',
                            'notInPlace_9_2_3',
                            'compensatingControl_9_2_3',
                            'customizedApproach_9_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.2.3 Interview responsible personnel and observe locations of hardware and lines to verify that physical access to wireless access points, gateways, networking/communications hardware, and telecommunication lines within the facility is restricted.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_2_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of the locations of hardware and lines for this testing procedure.',
                                    name: 'observationsHardwareLines_9_2_3',
                                },
                            },
                        ],
                    },
                    '9.2.4': {
                        title: '<p>9.2.4 Access to consoles in sensitive areas is restricted via locking when not in use.</p>',
                        names: [
                            'inPlace_9_2_4',
                            'notApplicable_9_2_4',
                            'notTested_9_2_4',
                            'notInPlace_9_2_4',
                            'compensatingControl_9_2_4',
                            'customizedApproach_9_2_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_2_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.2.4 Observe a system administrator’s attempt to log into consoles in sensitive areas and verify that they are “locked” to prevent unauthorized use.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of a system administrator’s attempt to log into consoles in sensitive areas for this testing procedure.',
                                    name: 'adminLogIntoConsoles_9_2_4',
                                },
                            },
                        ],
                    },
                },
            },
            9.3: {
                title: '<p>9.3 Physical access for personnel and visitors is authorized and managed.</p>',
                pciDss: {
                    '9.3.1': {
                        title: "<p>9.3.1 Procedures are implemented for authorizing and managing physical access of personnel to the CDE, including:</p>\n                <ul>\n                    <li>Identifying personnel.</li>\n                    <li>Managing changes to an individual's physical access requirements.</li>\n                    <li>Revoking or terminating personnel identification.</li>\n                    <li>Limiting access to the identification process or system to authorized personnel.</li>\n                </ul>",
                        names: [
                            'inPlace_9_3_1',
                            'notApplicable_9_3_1',
                            'notTested_9_3_1',
                            'notInPlace_9_3_1',
                            'compensatingControl_9_3_1',
                            'customizedApproach_9_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.3.1.a Examine documented procedures to verify that procedures to authorize and manage physical access of personnel to the CDE are defined in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_3_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.1.b Observe identification methods, such as ID badges, and processes to verify that personnel in the CDE are clearly identified.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of all identification methods and processes for this testing procedure.',
                                    name: 'observationsIdentificationMethods_9_3_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.1.c Observe processes to verify that access to the identification process, such as a badge system, is limited to authorized personnel.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsBadgeSystem_9_3_1_c',
                                },
                            },
                        ],
                    },
                    '9.3.1.1': {
                        title: '<p>9.3.1.1 Physical access to sensitive areas within the CDE for personnel is controlled as follows:</p>\n                <ul>\n                    <li>Access is authorized and based on individual job function.</li>\n                    <li>Access is revoked immediately upon termination.</li>\n                    <li>All physical access mechanisms, such as keys, access cards, etc., are returned or disabled upon termination.</li>\n                </ul>',
                        names: [
                            'inPlace_9_3_1_1',
                            'notApplicable_9_3_1_1',
                            'notTested_9_3_1_1',
                            'notInPlace_9_3_1_1',
                            'compensatingControl_9_3_1_1',
                            'customizedApproach_9_3_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_3_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.3.1.1.a Observe personnel in sensitive areas within the CDE, interview responsible personnel, and examine physical access control lists to verify that:\n                <ul>\n                    <li>Access to the sensitive area is authorized.</li>\n                    <li>Access is required for the individual’s job function.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of personnel in sensitive areas for this testing procedure.',
                                    name: 'observationsPersonnelSensitiveAreas_9_3_1_1',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_1_1',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all physical access control lists examined for this testing procedure.',
                                    name: 'accessControlLists_9_3_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.1.1.b Observe processes and interview personnel to verify that access of all personnel is revoked immediately upon termination.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsProcessesTermination_9_3_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsTermination_9_3_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.1.1.c For terminated personnel, examine physical access controls lists and interview responsible personnel to verify that all physical access mechanisms (such as keys, access cards, etc.) were returned or disabled.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all physical access control lists examined for this testing procedure.',
                                    name: 'accessMechanismsReturnDisabled_9_3_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsAccessReturn_9_3_1_1',
                                },
                            },
                        ],
                    },
                    '9.3.2': {
                        title: '<p>9.3.2 Procedures are implemented for authorizing and managing visitor access to the CDE, including:</p>\n                <ul>\n                    <li>Visitors are authorized before entering.</li>\n                    <li>Visitors are escorted at all times.</li>\n                    <li>Visitors are clearly identified and given a badge or other identification that expires.</li>\n                    <li>Visitor badges or other identification visibly distinguishes visitors from personnel.</li>\n                </ul>',
                        names: [
                            'inPlace_9_3_2',
                            'notApplicable_9_3_2',
                            'notTested_9_3_2',
                            'notInPlace_9_3_2',
                            'compensatingControl_9_3_2',
                            'customizedApproach_9_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.3.2.a Examine documented procedures and interview personnel to verify procedures are defined for authorizing and managing visitor access to the CDE in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined for this testing procedure.',
                                    name: 'documentedProceduresExamined_9_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.2.b Observe processes when visitors are present in the CDE and interview personnel to verify that visitors are: \n                    <ul>\n                        <li>Authorized before entering the CDE.</li>\n                        <li>Escorted at all times within the CDE.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes when visitors are present in the CDE for this testing procedure.',
                                    name: 'observationsProcessesVisitors_9_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_2_b',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.2.c Observe the use of visitor badges or other identification to verify that the badge or other identification does not permit unescorted access to the CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the use of visitor badges or other identification for this testing procedure.',
                                    name: 'visitorBadgesObservation_9_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.2.d Observe visitors in the CDE to verify that:\n                    <ul>\n                        <li>Visitor badges or other identification are being used for all visitors.</li>\n                        <li>Visitor badges or identification easily distinguish visitors from personnel.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations conducted for this testing procedure.',
                                    name: 'visitorIdentificationObservation_9_3_2',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.2.e Examine visitor badges or other identification and observe evidence in the badging system to verify visitor badges or other identification expires.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all visitor badges or other identification examined for this testing procedure.',
                                    name: 'examinedVisitorBadges_9_3_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of evidence in the badging system for this testing procedure.',
                                    name: 'badgingSystemObservation_9_3_2',
                                },
                            },
                        ],
                    },
                    '9.3.3': {
                        title: '<p>9.3.3 Visitor badges or identification are surrendered or deactivated before visitors leave the facility or at the date of expiration.</p>',
                        names: [
                            'inPlace_9_3_3',
                            'notApplicable_9_3_3',
                            'notTested_9_3_3',
                            'notInPlace_9_3_3',
                            'compensatingControl_9_3_3',
                            'customizedApproach_9_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.3.3 Observe visitors leaving the facility and interview personnel to verify visitor badges or other identification are surrendered or deactivated before visitors leave the facility or at the date of expiration.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of visitors leaving the facility for this testing procedure.',
                                    name: 'observationsVisitorsLeaving_9_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_3',
                                },
                            },
                        ],
                    },
                    '9.3.4': {
                        title: '<p>9.3.4 Visitor logs are used to maintain a physical record of visitor activity both within the facility and within sensitive areas, including:</p>\n                <ul>\n                    <li>The visitor’s name and the organization represented.</li>\n                    <li>The date and time of the visit.</li>\n                    <li>The name of the personnel authorizing physical access.</li>\n                    <li>Retaining the log for at least three months, unless otherwise restricted by law.</li>\n                </ul>',
                        names: [
                            'inPlace_9_3_4',
                            'notApplicable_9_3_4',
                            'notTested_9_3_4',
                            'notInPlace_9_3_4',
                            'compensatingControl_9_3_4',
                            'customizedApproach_9_3_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_3_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.3.4.a Examine the visitor logs and interview responsible personnel to verify that visitor logs are used to record physical access to both the facility and sensitive areas.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all visitor logs examined for this testing procedure.',
                                    name: 'visitorLogsExamined_9_3_4_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_4_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.4.b Examine the visitor logs and verify that the logs contain:\n                    <ul>\n                        <li>The visitor’s name and the organization represented.</li>\n                        <li>The personnel authorizing physical access.</li>\n                        <li>Date and time of visit.</li>\n                    </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all visitor logs examined for this testing procedure.',
                                    name: 'visitorLogsContent_9_3_4_b',
                                },
                            },
                            {
                                td: {
                                    0: '9.3.4.c Examine visitor log storage locations and interview responsible personnel to verify that the log is retained for at least three months, unless otherwise restricted by law.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all visitor log storage locations examined for this testing procedure.',
                                    name: 'logStorageLocations_9_3_4_c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_3_4_c',
                                },
                            },
                        ],
                    },
                },
            },
            9.4: {
                title: '<p>9.4 Media with cardholder data is securely stored, accessed, distributed, and destroyed.</p>',
                pciDss: {
                    '9.4.1': {
                        title: '<p>9.4.1 All media with cardholder data is physically secured.</p>',
                        names: [
                            'inPlace_9_4_1',
                            'notApplicable_9_4_1',
                            'notTested_9_4_1',
                            'notInPlace_9_4_1',
                            'compensatingControl_9_4_1',
                            'customizedApproach_9_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.1 Examine documentation to verify that procedures defined for protecting cardholder data include controls for physically securing all media.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_1',
                                },
                            },
                        ],
                    },
                    '9.4.1.1': {
                        title: '<p>9.4.1.1 Offline media backups with cardholder data are stored in a secure location.</p>',
                        names: [
                            'inPlace_9_4_1_1',
                            'notApplicable_9_4_1_1',
                            'notTested_9_4_1_1',
                            'notInPlace_9_4_1_1',
                            'compensatingControl_9_4_1_1',
                            'customizedApproach_9_4_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.1.1.a Examine documentation to verify that procedures are defined for physically securing offline media backups with cardholder data in a secure location.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_1_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.1.1.b Examine logs or other documentation and interview responsible personnel at the storage location to verify that offline media backups are stored in a secure location.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all logs or other documentation examined for this testing procedure.',
                                    name: 'logsExamined_9_4_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_1_1',
                                },
                            },
                        ],
                    },
                    '9.4.1.2': {
                        title: '<p>9.4.1.2 The security of the offline media backup location(s) with cardholder data is reviewed at least once every 12 months.</p>',
                        names: [
                            'inPlace_9_4_1_2',
                            'notApplicable_9_4_1_2',
                            'notTested_9_4_1_2',
                            'notInPlace_9_4_1_2',
                            'compensatingControl_9_4_1_2',
                            'customizedApproach_9_4_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.1.2.a Examine documentation to verify that procedures are defined for reviewing the security of the offline media backup location(s) with cardholder data at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.1.2.b Examine documented procedures, logs, or other documentation, and interview responsible personnel at the storage location(s) to verify that the storage location’s security is reviewed at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures, logs, or other documentation examined for this testing procedure.',
                                    name: 'logsExamined_9_4_1_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_1_2',
                                },
                            },
                        ],
                    },
                    '9.4.2': {
                        title: '<p>9.4.2 All media with cardholder data is classified in accordance with the sensitivity of the data.</p>',
                        names: [
                            'inPlace_9_4_2',
                            'notApplicable_9_4_2',
                            'notTested_9_4_2',
                            'notInPlace_9_4_2',
                            'compensatingControl_9_4_2',
                            'customizedApproach_9_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.2.a Examine documentation to verify that procedures are defined for classifying media with cardholder data in accordance with the sensitivity of the data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.2.b Examine media logs or other documentation to verify that all media is classified in accordance with the sensitivity of the data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all media logs or other documentation examined for this testing procedure.',
                                    name: 'mediaLogsExamined_9_4_2',
                                },
                            },
                        ],
                    },
                    '9.4.3': {
                        title: '<p>9.4.3 Media with cardholder data sent outside the facility is secured as follows:</p>\n                <ul>\n                    <li>Media sent outside the facility is logged.</li>\n                    <li>Media is sent by secured courier or other delivery method that can be accurately tracked.</li>\n                    <li>Offsite tracking logs include details about media location.</li>\n                </ul>',
                        names: [
                            'inPlace_9_4_3',
                            'notApplicable_9_4_3',
                            'notTested_9_4_3',
                            'notInPlace_9_4_3',
                            'compensatingControl_9_4_3',
                            'customizedApproach_9_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.3.a Examine documentation to verify that procedures are defined for securing media sent outside the facility in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_3',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.3.b Interview personnel and examine records to verify that all media sent outside the facility is logged and sent via secured courier or other delivery method that can be tracked.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all records examined for this testing procedure.',
                                    name: 'recordsExamined_9_4_3',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.3.c Examine offsite tracking logs for all media to verify tracking details are documented.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all offsite tracking logs examined for this testing procedure.',
                                    name: 'offsiteTrackingLogsExamined_9_4_3',
                                },
                            },
                        ],
                    },
                    '9.4.4': {
                        title: '<p>9.4.4 Management approves all media with cardholder data that is moved outside the facility (including when media is distributed to individuals).</p>',
                        names: [
                            'inPlace_9_4_4',
                            'notApplicable_9_4_4',
                            'notTested_9_4_4',
                            'notInPlace_9_4_4',
                            'compensatingControl_9_4_4',
                            'customizedApproach_9_4_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.4.a Examine documentation to verify that procedures are defined to ensure that media moved outside the facility is approved by management.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_4',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.4.b Examine offsite media tracking logs and interview responsible personnel to verify that proper management authorization is obtained for all media moved outside the facility (including media distributed to individuals).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all offsite media tracking logs examined for this testing procedure.',
                                    name: 'offsiteMediaLogsExamined_9_4_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_4',
                                },
                            },
                        ],
                    },
                    '9.4.5': {
                        title: '<p>9.4.5 Inventory logs of all electronic media with cardholder data are maintained.</p>',
                        names: [
                            'inPlace_9_4_5',
                            'notApplicable_9_4_5',
                            'notTested_9_4_5',
                            'notInPlace_9_4_5',
                            'compensatingControl_9_4_5',
                            'customizedApproach_9_4_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.5.a Examine documentation to verify that procedures are defined to maintain electronic media inventory logs.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_5',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.5.b Examine electronic media inventory logs and interview responsible personnel to verify that logs are maintained.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all electronic media inventory logs examined for this testing procedure.',
                                    name: 'inventoryLogsExamined_9_4_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_5',
                                },
                            },
                        ],
                    },
                    '9.4.5.1': {
                        title: '<p>9.4.5.1 Inventories of electronic media with cardholder data are conducted at least once every 12 months.</p>',
                        names: [
                            'inPlace_9_4_5_1',
                            'notApplicable_9_4_5_1',
                            'notTested_9_4_5_1',
                            'notInPlace_9_4_5_1',
                            'compensatingControl_9_4_5_1',
                            'customizedApproach_9_4_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_4_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.5.1.a Examine documentation to verify that procedures are defined to conduct inventories of electronic media with cardholder data at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_9_4_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.5.1.b Examine electronic media inventory logs and interview personnel to verify that electronic media inventories are performed at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all electronic media inventory logs examined for this testing procedure.',
                                    name: 'inventoryLogsExamined_9_4_5_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_5_1',
                                },
                            },
                        ],
                    },
                    '9.4.6': {
                        title: '<p>9.4.6 Hard-copy materials with cardholder data are destroyed when no longer needed for business or legal reasons, as follows:<br>\n    • Materials are cross-cut shredded, incinerated, or pulped so that cardholder data cannot be reconstructed.<br>\n    • Materials are stored in secure storage containers prior to destruction.</p>',
                        names: [
                            'inPlace_9_4_6',
                            'notApplicable_9_4_6',
                            'notTested_9_4_6',
                            'notInPlace_9_4_6',
                            'compensatingControl_9_4_6',
                            'customizedApproach_9_4_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_9_4_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.6.a Examine the media destruction policy to verify that procedures are defined to destroy hard-copy media with cardholder data when no longer needed for business or legal reasons in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the periodic media destruction policy examined for this testing procedure.',
                                    name: 'mediaDestructionPolicyExamined_9_4_6',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.6.b Observe processes and interview personnel to verify that hard-copy materials are cross-cut shredded, incinerated, or pulped such that cardholder data cannot be reconstructed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsOfProcesses_9_4_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_6',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.6.c Observe storage containers used for materials that contain information to be destroyed to verify that the containers are secure.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the storage containers used for materials that contain information to be destroyed for this testing procedure.',
                                    name: 'observationsOfStorageContainers_9_4_6',
                                },
                            },
                        ],
                    },
                    '9.4.7': {
                        title: '<p>9.4.7 Electronic media with cardholder data is destroyed when no longer needed for business or legal reasons via one of the following:<br>\n    • The electronic media is destroyed.<br>\n    • The cardholder data is rendered unrecoverable so that it cannot be reconstructed.</p>',
                        names: [
                            'inPlace_9_4_7',
                            'notApplicable_9_4_7',
                            'notTested_9_4_7',
                            'notInPlace_9_4_7',
                            'compensatingControl_9_4_7',
                            'customizedApproach_9_4_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_9_4_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.4.7.a Examine the media destruction policy to verify that procedures are defined to destroy electronic media when no longer needed for business or legal reasons in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the periodic media destruction policy examined for this testing procedure.',
                                    name: 'mediaDestructionPolicyExamined_9_4_7',
                                },
                            },
                            {
                                td: {
                                    0: '9.4.7.b Observe the media destruction process and interview responsible personnel to verify that electronic media with cardholder data is destroyed via one of the methods specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the media destruction process for this testing procedure.',
                                    name: 'observationsOfMediaDestructionProcess_9_4_7',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_4_7',
                                },
                            },
                        ],
                    },
                },
            },
            9.5: {
                title: '<p>9.5 Point-of-interaction (POI) devices are protected from tampering and unauthorized substitution.</p>',
                pciDss: {
                    '9.5.1': {
                        title: '<p>9.5.1 POI devices that capture payment card data via direct physical interaction with the payment card form factor are protected from tampering and unauthorized substitution, including the following:</p>\n                        <ul>\n                            <li>Maintaining a list of POI devices.</li>\n                            <li>Periodically inspecting POI devices to look for tampering or unauthorized substitution.</li>\n                            <li>Training personnel to be aware of suspicious behavior and to report tampering or unauthorized substitution of devices.</li>\n                        </ul>',
                        names: [
                            'inPlace_9_5_1',
                            'notApplicable_9_5_1',
                            'notTested_9_5_1',
                            'notInPlace_9_5_1',
                            'compensatingControl_9_5_1',
                            'customizedApproach_9_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_9_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.5.1 Examine documented policies and procedures to verify that processes are defined that include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for policies and procedures examined for this testing procedure.',
                                    name: 'documentedPoliciesProcedures_9_5_1',
                                },
                            },
                        ],
                    },
                    '9.5.1.1': {
                        title: '<p>9.5.1.1 An up-to-date list of POI devices is maintained, including:</p>\n                <ul>\n                    <li>Make and model of the device.</li>\n                    <li>Location of device.</li>\n                    <li>Device serial number or other methods of unique identification.</li>\n                </ul>',
                        names: [
                            'inPlace_9_5_1_1',
                            'notApplicable_9_5_1_1',
                            'notTested_9_5_1_1',
                            'notInPlace_9_5_1_1',
                            'compensatingControl_9_5_1_1',
                            'customizedApproach_9_5_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_5_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.5.1.1.a Examine the list of POI devices to verify it includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all lists of POI devices examined for this testing procedure.',
                                    name: 'poiDeviceListExamined_9_5_1_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.5.1.1.b Observe POI devices and device locations and compare to devices in the list to verify that the list is accurate and up to date.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of the POI devices and device locations for this testing procedure.',
                                    name: 'poiDevicesObserved_9_5_1_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '9.5.1.1.c Interview personnel to verify the list of POI devices is updated when devices are added, relocated, decommissioned, etc.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'personnelInterviewed_9_5_1_1_c',
                                },
                            },
                        ],
                    },
                    '9.5.1.2': {
                        title: '<p>9.5.1.2 POI device surfaces are periodically inspected to detect tampering and unauthorized substitution.</p>',
                        names: [
                            'inPlace_9_5_1_2',
                            'notApplicable_9_5_1_2',
                            'notTested_9_5_1_2',
                            'notInPlace_9_5_1_2',
                            'compensatingControl_9_5_1_2',
                            'customizedApproach_9_5_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_5_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.5.1.2.a Examine documented procedures to verify processes are defined for periodic inspections of POI device surfaces to detect tampering and unauthorized substitution.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented procedures examined for this testing procedure.',
                                    name: 'documentedProceduresExamined_9_5_1_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.5.1.2.b Interview responsible personnel and observe inspection processes to verify:<ul>\n                    <li>Personnel are aware of procedures for inspecting devices.</li>\n                    <li>All devices are periodically inspected for evidence of tampering and unauthorized substitution.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'personnelInterviewed_9_5_1_2_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of the inspection processes for this testing procedure.',
                                    name: 'inspectionProcessesObserved_9_5_1_2',
                                },
                            },
                        ],
                    },
                    '9.5.1.2.1': {
                        title: '<p>9.5.1.2.1 The frequency of periodic POI device inspections and the type of inspections performed is defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.<br> \n                <b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_9_5_1_2_1',
                            'notApplicable_9_5_1_2_1',
                            'notTested_9_5_1_2_1',
                            'notInPlace_9_5_1_2_1',
                            'compensatingControl_9_5_1_2_1',
                            'customizedApproach_9_5_1_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_5_1_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.5.1.2.1.a Examine the entity’s targeted risk analysis for the frequency of periodic POI device inspections and type of inspections performed to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysis_9_5_1_2_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.5.1.2.1.b Examine documented results of periodic device inspections and interview personnel to verify that the frequency and type of POI device inspections performed match what is defined in the entity’s targeted risk analysis conducted for this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented results of periodic device inspections examined for this testing procedure.',
                                    name: 'deviceInspectionsResults_9_5_1_2_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_9_5_1_2_1',
                                },
                            },
                        ],
                    },
                    '9.5.1.3': {
                        title: '<p>9.5.1.3 Training is provided for personnel in POI environments to be aware of attempted tampering or replacement of POI devices, and includes:</p>\n                <ul>\n                    <li>Verifying the identity of any third-party persons claiming to be repair or maintenance personnel, before granting them access to modify or troubleshoot devices.</li>\n                    <li>Procedures to ensure devices are not installed, replaced, or returned without verification.</li>\n                    <li>Being aware of suspicious behavior around devices.</li>\n                    <li>Reporting suspicious behavior and indications of device tampering or substitution to appropriate personnel.</li>\n                </ul>',
                        names: [
                            'inPlace_9_5_1_3',
                            'notApplicable_9_5_1_3',
                            'notTested_9_5_1_3',
                            'notInPlace_9_5_1_3',
                            'compensatingControl_9_5_1_3',
                            'customizedApproach_9_5_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_9_5_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '9.5.1.3.a Review training materials for personnel in POI environments to verify they include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all training materials examined for this testing procedure.',
                                    name: 'trainingMaterials_9_5_1_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '9.5.1.3.b Interview personnel in POI environments to verify they have received training and know the procedures for all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsPersonnel_9_5_1_3_b',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_10: {
        title: 'Requirement 10: Log and Monitor All Access to System Components and Cardholder Data',
        descriptions: {
            10.1: {
                title: '<p>10.1 Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and understood.</p>',
                pciDss: {
                    '10.1.1': {
                        title: '<p>10.1.1 All security policies and operational procedures that are identified in Requirement 10 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_10_1_1',
                            'notApplicable_10_1_1',
                            'notTested_10_1_1',
                            'notInPlace_10_1_1',
                            'compensatingControl_10_1_1',
                            'customizedApproach_10_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures identified in Requirement 10 are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsPersonnel_10_1_1',
                                },
                            },
                        ],
                    },
                    '10.1.2': {
                        title: '<p>10.1.2 Roles and responsibilities for performing activities in Requirement 10 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_10_1_2',
                            'notApplicable_10_1_2',
                            'notTested_10_1_2',
                            'notInPlace_10_1_2',
                            'compensatingControl_10_1_2',
                            'customizedApproach_10_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 10 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '10.1.2.b Interview personnel with responsibility for performing activities in Requirement 10 to verify that roles and responsibilities are assigned as defined and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsPersonnel_10_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            10.2: {
                title: '<p>10.2 Audit logs are implemented to support the detection of anomalies and suspicious activity, and the forensic analysis of events.</p>',
                pciDss: {
                    '10.2.1': {
                        title: '<p>10.2.1 Audit logs are enabled and active for all system components and cardholder data.</p>',
                        names: [
                            'inPlace_10_2_1',
                            'notApplicable_10_2_1',
                            'notTested_10_2_1',
                            'notInPlace_10_2_1',
                            'compensatingControl_10_2_1',
                            'customizedApproach_10_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1 Interview the system administrator and examine system configurations to verify that audit logs are enabled and active for all system components.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigurationsExamined_10_2_1',
                                },
                            },
                        ],
                    },
                    '10.2.1.1': {
                        title: '<p>10.2.1.1 Audit logs capture all individual user access to cardholder data.</p>',
                        names: [
                            'inPlace_10_2_1_1',
                            'notApplicable_10_2_1_1',
                            'notTested_10_2_1_1',
                            'notInPlace_10_2_1_1',
                            'compensatingControl_10_2_1_1',
                            'customizedApproach_10_2_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.1 Examine audit log configurations and log data to verify that all individual user access to cardholder data is logged.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_1_1',
                                },
                            },
                        ],
                    },
                    '10.2.1.2': {
                        title: '<p>10.2.1.2 Audit logs capture all actions taken by any individual with administrative access, including any interactive use of application or system accounts.</p>',
                        names: [
                            'inPlace_10_2_1_2',
                            'notApplicable_10_2_1_2',
                            'notTested_10_2_1_2',
                            'notInPlace_10_2_1_2',
                            'compensatingControl_10_2_1_2',
                            'customizedApproach_10_2_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.2 Examine audit log configurations and log data to verify that all actions taken by any individual with administrative access, including any interactive use of application or system accounts, are logged.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_1_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_1_2',
                                },
                            },
                        ],
                    },
                    '10.2.1.3': {
                        title: '<p>10.2.1.3 Audit logs capture all access to audit logs.</p>',
                        names: [
                            'inPlace_10_2_1_3',
                            'notApplicable_10_2_1_3',
                            'notTested_10_2_1_3',
                            'notInPlace_10_2_1_3',
                            'compensatingControl_10_2_1_3',
                            'customizedApproach_10_2_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.3 Examine audit log configurations and log data to verify that access to all audit logs is captured.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_1_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_1_3',
                                },
                            },
                        ],
                    },
                    '10.2.1.4': {
                        title: '<p>10.2.1.4 Audit logs capture all invalid logical access attempts.</p>',
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.4 Examine audit log configurations and log data to verify that invalid logical access attempts are captured.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurations_10_2_1_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'allLogData_10_2_1_4',
                                },
                            },
                        ],
                    },
                    '10.2.1.5': {
                        title: '<p>10.2.1.5 Audit logs capture all changes to identification and authentication credentials including, but not limited to:</p>\n                    <ul>\n                        <li>Creation of new accounts.</li>\n                        <li>Elevation of privileges.</li>\n                        <li>All changes, additions, or deletions to accounts with administrative access.</li>\n                    </ul>',
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.5 Examine audit log configurations and log data to verify that changes to identification and authentication credentials are captured in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurations_10_2_1_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'allLogDataExamined_10_2_1_5',
                                },
                            },
                        ],
                    },
                    '10.2.1.6': {
                        title: '<p>10.2.1.6 Audit logs capture the following:</p>\n                <ul>\n                    <li>All initialization of new audit logs.</li>\n                    <li>All starting, stopping, or pausing of the existing audit logs.</li>\n                </ul>',
                        names: [
                            'inPlace_10_2_1_6',
                            'notApplicable_10_2_1_6',
                            'notTested_10_2_1_6',
                            'notInPlace_10_2_1_6',
                            'compensatingControl_10_2_1_6',
                            'customizedApproach_10_2_1_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.6 Examine audit log configurations and log data to verify that all elements specified in this requirement are captured.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_1_6',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_1_6',
                                },
                            },
                        ],
                    },
                    '10.2.1.7': {
                        title: '<p>10.2.1.7 Audit logs capture all creation and deletion of system-level objects.</p>',
                        names: [
                            'inPlace_10_2_1_7',
                            'notApplicable_10_2_1_7',
                            'notTested_10_2_1_7',
                            'notInPlace_10_2_1_7',
                            'compensatingControl_10_2_1_7',
                            'customizedApproach_10_2_1_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_1_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.1.7 Examine audit log configurations and log data to verify that the creation and deletion of system-level objects are captured.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_1_7',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_1_7',
                                },
                            },
                        ],
                    },
                    '10.2.2': {
                        title: '<p>10.2.2 Audit logs record the following details for each auditable event:</p>\n                <ul>\n                    <li>User identification.</li>\n                    <li>Type of event.</li>\n                    <li>Date and time.</li>\n                    <li>Success and failure indication.</li>\n                    <li>Origination of event.</li>\n                    <li>Identity or name of affected data, system component, resource, or service (for example, name and protocol).</li>\n                </ul>',
                        names: [
                            'inPlace_10_2_2',
                            'notApplicable_10_2_2',
                            'notTested_10_2_2',
                            'notInPlace_10_2_2',
                            'compensatingControl_10_2_2',
                            'customizedApproach_10_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.2.2 Interview personnel and examine audit log configurations and log data to verify that all elements specified in this requirement are included in log entries for each auditable event (from 10.2.1.1 through 10.2.1.7).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_2_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all audit log configurations examined for this testing procedure.',
                                    name: 'auditLogConfigurationsExamined_10_2_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all log data examined for this testing procedure.',
                                    name: 'logDataExamined_10_2_2',
                                },
                            },
                        ],
                    },
                },
            },
            10.3: {
                title: '<p>10.3 Audit logs are protected from destruction and unauthorized modifications.</p>',
                pciDss: {
                    '10.3.1': {
                        title: '<p>10.3.1 Read access to audit logs files is limited to those with a job-related need.</p>',
                        names: [
                            'inPlace_10_3_1',
                            'notApplicable_10_3_1',
                            'notTested_10_3_1',
                            'notInPlace_10_3_1',
                            'compensatingControl_10_3_1',
                            'customizedApproach_10_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.3.1 Interview system administrators and examine system configurations and privileges to verify that only individuals with a job-related need have read access to audit log files.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations and privileges examined for this testing procedure.',
                                    name: 'systemConfigurationsExamined_10_3_1',
                                },
                            },
                        ],
                    },
                    '10.3.2': {
                        title: '<p>10.3.1 Read access to audit logs files is limited to those with a job-related need.</p>',
                        names: [
                            'inPlace_10_3_1',
                            'notApplicable_10_3_1',
                            'notTested_10_3_1',
                            'notInPlace_10_3_1',
                            'compensatingControl_10_3_1',
                            'customizedApproach_10_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.3.1 Interview system administrators and examine system configurations and privileges to verify that only individuals with a job-related need have read access to audit log files.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_3_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configurations and privileges examined for this testing procedure.',
                                    name: 'systemConfigurationsExamined_10_3_1',
                                },
                            },
                        ],
                    },
                    '10.3.3': {
                        title: '<p>10.3.3 Audit log files, including those for external-facing technologies, are promptly backed up to a secure, central, internal log server(s) or other media that is difficult to modify.</p>',
                        tableBody: [
                            {
                                td: {
                                    0: '10.3.3 Examine backup configurations or log files to verify that current audit log files, including those for external-facing technologies, are promptly backed up to a secure, central, internal log server(s) or other media that is difficult to modify.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all backup configurations or log files examined for this testing procedure.',
                                    name: 'backupConfigurationsLogFiles_10_3_3',
                                },
                            },
                        ],
                    },
                    '10.3.4': {
                        title: '<p>10.3.4 File integrity monitoring or change-detection mechanisms is used on audit logs to ensure that existing log data cannot be changed without generating alerts.</p>',
                        names: [
                            'inPlace_10_3_4',
                            'notApplicable_10_3_4',
                            'notTested_10_3_4',
                            'notInPlace_10_3_4',
                            'compensatingControl_10_3_4',
                            'customizedApproach_10_3_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_3_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.3.4 Examine system settings, monitored files, and results from monitoring activities to verify the use of file integrity monitoring or change-detection software on audit logs.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettingsExamined_10_3_4',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all monitored files examined for this testing procedure.',
                                    name: 'monitoredFilesExamined_10_3_4',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all results from monitoring activities examined for this testing procedure.',
                                    name: 'monitoringResultsExamined_10_3_4',
                                },
                            },
                        ],
                    },
                },
            },
            10.4: {
                title: '<p>10.4 Audit logs are reviewed to identify anomalies or suspicious activity.</p>',
                pciDss: {
                    '10.4.1': {
                        title: '<p>10.4.1 The following audit logs are reviewed at least once daily:</p>\n                <ul>\n                    <li>All security events.</li>\n                    <li>Logs of all system components that store, process, or transmit CHD and/or SAD.</li>\n                    <li>Logs of all critical system components.</li>\n                    <li>Logs of all servers and system components that perform security functions (for example, network security controls, intrusion-detection systems/intrusion-prevention systems (IDS/IPS), authentication servers).</li>\n                </ul>',
                        names: [
                            'inPlace_10_4_1',
                            'notApplicable_10_4_1',
                            'notTested_10_4_1',
                            'notInPlace_10_4_1',
                            'compensatingControl_10_4_1',
                            'customizedApproach_10_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.4.1.a Examine security policies and procedures to verify that processes are defined for reviewing all elements specified in this requirement at least once daily.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security policies and procedures examined for this testing procedure.',
                                    name: 'securityPoliciesExamined_10_4_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '10.4.1.b Observe processes and interview personnel to verify that all elements specified in this requirement are reviewed at least once daily.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsProcesses_10_4_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_4_1_b',
                                },
                            },
                        ],
                    },
                    '10.4.1.1': {
                        title: '<p>10.4.1.1 Automated mechanisms are used to perform audit log reviews.</p>\n                <i>\n                    <b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.\n                </i>',
                        names: [
                            'inPlace_10_4_1_1',
                            'notApplicable_10_4_1_1',
                            'notTested_10_4_1_1',
                            'notInPlace_10_4_1_1',
                            'compensatingControl_10_4_1_1',
                            'customizedApproach_10_4_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_4_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.4.1.1 Examine log review mechanisms and interview personnel to verify that automated mechanisms are used to perform log reviews.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all log review mechanisms examined for this testing procedure.',
                                    name: 'logReviewMechanismsExamined_10_4_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_4_1_1',
                                },
                            },
                        ],
                    },
                    '10.4.2': {
                        title: '<p>10.4.2 Logs of all other system components (those not specified in Requirement 10.4.1) are reviewed periodically.</p>',
                        names: [
                            'inPlace_10_4_2',
                            'notApplicable_10_4_2',
                            'notTested_10_4_2',
                            'notInPlace_10_4_2',
                            'compensatingControl_10_4_2',
                            'customizedApproach_10_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.4.2.a Examine security policies and procedures to verify that processes are defined for reviewing logs of all other system components periodically.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security policies and procedures examined for this testing procedure.',
                                    name: 'securityPoliciesExamined_10_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '10.4.2.b Examine documented results of log reviews and interview personnel to verify that log reviews are performed periodically.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of log reviews examined for this testing procedure.',
                                    name: 'documentedResultsExamined_10_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_4_2',
                                },
                            },
                        ],
                    },
                    '10.4.2.1': {
                        title: '<p>10.4.2.1 The frequency of periodic log reviews for all other system components (not defined in Requirement 10.4.1) is defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.</p>\n                <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i></p>',
                        names: [
                            'inPlace_10_4_2_1',
                            'notApplicable_10_4_2_1',
                            'notTested_10_4_2_1',
                            'notInPlace_10_4_2_1',
                            'compensatingControl_10_4_2_1',
                            'customizedApproach_10_4_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_4_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.4.2.1.a Examine the entity’s targeted risk analysis for the frequency of periodic log reviews for all other system components (not defined in Requirement 10.4.1) to verify the risk analysis was performed in accordance with all elements specified at Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysisExamined_10_4_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '10.4.2.1.b Examine documented results of periodic log reviews of all other system components (not defined in Requirement 10.4.1) and interview personnel to verify log reviews are performed at the frequency specified in the entity’s targeted risk analysis performed for this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented results of all other system components (not defined in Requirement 10.4.1) examined for this testing procedure.',
                                    name: 'documentedResultsExamined_10_4_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_4_2_1',
                                },
                            },
                        ],
                    },
                    '10.4.3': {
                        title: '<p>10.4.3 Exceptions and anomalies identified during the review process are addressed.</p>',
                        names: [
                            'inPlace_10_4_3',
                            'notApplicable_10_4_3',
                            'notTested_10_4_3',
                            'notInPlace_10_4_3',
                            'compensatingControl_10_4_3',
                            'customizedApproach_10_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.4.3.a Examine security policies and procedures to verify that processes are defined for addressing exceptions and anomalies identified during the review process.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security policies and procedures examined for this testing procedure.',
                                    name: 'securityPoliciesExamined_10_4_3',
                                },
                            },
                            {
                                td: {
                                    0: '10.4.3.b Observe processes and interview personnel to verify that, when exceptions and anomalies are identified, they are addressed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of processes for this testing procedure.',
                                    name: 'observationsOfProcesses_10_4_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_4_3',
                                },
                            },
                        ],
                    },
                },
            },
            10.5: {
                title: '<p>10.5 Audit log history is retained and available for analysis.</p>',
                pciDss: {
                    '10.5.1': {
                        title: '<p>10.5.1 Retain audit log history for at least 12 months, with at least the most recent three months immediately available for analysis.</p>',
                        names: [
                            'inPlace_10_5_1',
                            'notApplicable_10_5_1',
                            'notTested_10_5_1',
                            'notInPlace_10_5_1',
                            'compensatingControl_10_5_1',
                            'customizedApproach_10_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>10.5.1.a Examine documentation to verify that the following is defined:</p>\n                          <ul>\n                              <li>Audit log retention policies.</li>\n                              <li>Procedures for retaining audit log history for at least 12 months, with at least the most recent three months immediately available online.</li>\n                        </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '10.5.1.b Examine configurations of audit log history, interview personnel and examine audit logs to verify that audit logs history is retained for at least 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configurations examined for this testing procedure.',
                                    name: 'configurationsExamined_10_5_1',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_5_1',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all audit logs examined for this testing procedure.',
                                    name: 'auditLogsExamined_10_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '10.5.1.c Interview personnel and observe processes to verify that at least the most recent three months’ audit log history is immediately available for analysis.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_5_1_c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the observations of processes for this testing procedure.',
                                    name: 'observationsOfProcesses_10_5_1',
                                },
                            },
                        ],
                    },
                },
            },
            10.6: {
                title: '<p>10.6 Time-synchronization mechanisms support consistent time settings across all systems.</p>',
                pciDss: {
                    '10.6.1': {
                        title: '<p>10.6.1 System clocks and time are synchronized using time-synchronization technology.</p>',
                        names: [
                            'inPlace_10_6_1',
                            'notApplicable_10_6_1',
                            'notTested_10_6_1',
                            'notInPlace_10_6_1',
                            'compensatingControl_10_6_1',
                            'customizedApproach_10_6_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_6_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.6.1 Examine system configuration settings to verify that time-synchronization technology is implemented and kept current.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_10_6_1',
                                },
                            },
                        ],
                    },
                    '10.6.2': {
                        title: '<p>10.6.2 Systems are configured to the correct and consistent time as follows:</p>\n                <ul>\n                    <li>One or more designated time servers are in use.</li>\n                    <li>Only the designated central time server(s) receives time from external sources.</li>\n                    <li>Time received from external sources is based on International Atomic Time or Coordinated Universal Time (UTC).</li>\n                    <li>The designated time server(s) accept time updates only from specific industry-accepted external sources.</li>\n                    <li>Where there is more than one designated time server, the time servers peer with one another to keep accurate time.</li>\n                    <li>Internal systems receive time information only from designated central time server(s).</li>\n                </ul>',
                        names: [
                            'inPlace_10_6_2',
                            'notApplicable_10_6_2',
                            'notTested_10_6_2',
                            'notInPlace_10_6_2',
                            'compensatingControl_10_6_2',
                            'customizedApproach_10_6_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_6_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.6.2 Examine system configuration settings for acquiring, distributing, and storing the correct time to verify the settings are configured in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_10_6_2',
                                },
                            },
                        ],
                    },
                    '10.6.3': {
                        title: '<p>10.6.3 Time synchronization settings and data are protected as follows:</p>\n                <ul>\n                    <li>Access to time data is restricted to only personnel with a business need.</li>\n                    <li>Any changes to time settings on critical systems are logged, monitored, and reviewed.</li>\n                </ul>',
                        names: [
                            'inPlace_10_6_3',
                            'notApplicable_10_6_3',
                            'notTested_10_6_3',
                            'notInPlace_10_6_3',
                            'compensatingControl_10_6_3',
                            'customizedApproach_10_6_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_6_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.6.3.a Examine system configurations and time-synchronization settings to verify that access to time data is restricted to only personnel with a business need.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations and time-synchronization settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_10_6_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '10.6.3.b Examine system configurations and time synchronization settings and logs and observe processes to verify that any changes to time settings on critical systems are logged, monitored, and reviewed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations and time synchronization settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_10_6_3_b',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all logs examined for this testing procedure.',
                                    name: 'logsExamined_10_6_3',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the observations of processes for this testing procedure.',
                                    name: 'observationsProcesses_10_6_3',
                                },
                            },
                        ],
                    },
                },
            },
            10.7: {
                title: '<p>10.7 Failures of critical security control systems are detected, reported, and responded to promptly.</p>',
                pciDss: {
                    '10.7.1': {
                        title: '<p>10.7.1 Additional requirement for service providers only: Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following critical security control systems:</p>\n                <ul>\n                    <li>Network security controls.</li>\n                    <li>IDS/IPS.</li>\n                    <li>FIM.</li>\n                    <li>Anti-malware solutions.</li>\n                    <li>Physical access controls.</li>\n                    <li>Logical access controls.</li>\n                    <li>Audit logging mechanisms.</li>\n                    <li>Segmentation controls (if used).</li>\n                </ul>\n                <p><b>Note:</b> This requirement will be superseded by Requirement 10.7.2 as of 31 March 2025.</p>',
                        names: [
                            'inPlace_10_7_1',
                            'notApplicable_10_7_1',
                            'notTested_10_7_1',
                            'notInPlace_10_7_1',
                            'compensatingControl_10_7_1',
                            'customizedApproach_10_7_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_7_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.7.1.a Additional testing procedure for service provider assessments only: Examine documentation to verify that processes are defined for the prompt detection and addressing of failures of critical security control systems, including but not limited to failure of all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_7_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '10.7.1.b Additional testing procedure for service provider assessments only: Observe detection and alerting processes and interview personnel to verify that failures of critical security control systems are detected and reported, and that failure of a critical security control results in the generation of an alert.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of detection and alerting processes conducted for this testing procedure.',
                                    name: 'observationsDetection_10_7_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_7_1_b',
                                },
                            },
                        ],
                    },
                    '10.7.2': {
                        title: '<p>10.7.2 Failures of critical security control systems are detected, alerted, and addressed promptly, including but not limited to failure of the following critical security control systems:</p>\n                <ul>\n                    <li>Network security controls.</li>\n                    <li>IDS/IPS.</li>\n                    <li>Change-detection mechanisms.</li>\n                    <li>Anti-malware solutions.</li>\n                    <li>Physical access controls.</li>\n                    <li>Logical access controls.</li>\n                    <li>Audit logging mechanisms.</li>\n                    <li>Segmentation controls (if used).</li>\n                    <li>Audit log review mechanisms.</li>\n                    <li>Automated security testing tools (if used).</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment and will supersede Requirement 10.7.1.</p>',
                        names: [
                            'inPlace_10_7_2',
                            'notApplicable_10_7_2',
                            'notTested_10_7_2',
                            'notInPlace_10_7_2',
                            'compensatingControl_10_7_2',
                            'customizedApproach_10_7_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_7_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.7.2.a Examine documentation to verify that processes are defined for the prompt detection and addressing of failures of critical security control systems, including but not limited to failure of all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_7_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '10.7.2.b Observe detection and alerting processes and interview personnel to verify that failures of critical security control systems are detected and reported, and that failure of a critical security control results in the generation of an alert.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all observations of detection and alerting processes conducted for this testing procedure.',
                                    name: 'observationsDetection_10_7_2_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_7_2_b',
                                },
                            },
                        ],
                    },
                    '10.7.3': {
                        title: '<p>10.7.3 Failures of any critical security control systems are responded to promptly, including but not limited to:</p>\n                <ul>\n                    <li>Restoring security functions.</li>\n                    <li>Identifying and documenting the duration (date and time from start to end) of the security failure.</li>\n                    <li>Identifying and documenting the cause(s) of failure and documenting required remediation.</li>\n                    <li>Identifying and addressing any security issues that arose during the failure.</li>\n                    <li>Determining whether further actions are required as a result of the security failure.</li>\n                    <li>Implementing controls to prevent the cause of failure from reoccurring.</li>\n                    <li>Resuming monitoring of security controls.</li>\n                </ul>\n                <p><b>Note:</b> This is a current v3.2.1 requirement that applies to service providers only. However, this requirement is a best practice for all other entities until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_10_7_3',
                            'notApplicable_10_7_3',
                            'notTested_10_7_3',
                            'notInPlace_10_7_3',
                            'compensatingControl_10_7_3',
                            'customizedApproach_10_7_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_10_7_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '10.7.3.a Examine documentation and interview personnel to verify that processes are defined and implemented to respond to a failure of any critical security control system and include at least all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_10_7_3_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_10_7_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '<p>10.7.3.b Examine records to verify that failures of critical security control systems are documented to include:</p><ul>\n                    <li>Identification of cause(s) of the failure.</li>\n                    <li>Duration (date and time start and end) of the security failure.</li>\n                    <li>Details of the remediation required to address the root cause.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all records examined for this testing procedure.',
                                    name: 'recordsExamined_10_7_3_b',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_11: {
        title: 'Requirement 11: Test Security of Systems and Networks Regularly',
        descriptions: {
            11.1: {
                title: '<p>11.1 Processes and mechanisms for regularly testing security of systems and networks are defined and understood.</p>',
                pciDss: {
                    '11.1.1': {
                        title: '<p>11.1.1 All security policies and operational procedures that are identified in Requirement 11 are:</p>\n                <ul>\n                    <li>Documented.</li>\n                    <li>Kept up to date.</li>\n                    <li>In use.</li>\n                    <li>Known to all affected parties.</li>\n                </ul>',
                        names: [
                            'inPlace_11_1_1',
                            'notApplicable_11_1_1',
                            'notTested_11_1_1',
                            'notInPlace_11_1_1',
                            'compensatingControl_11_1_1',
                            'customizedApproach_11_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.1.1 Examine documentation and interview personnel to verify that security policies and operational procedures are managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_11_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_1_1',
                                },
                            },
                        ],
                    },
                    '11.1.2': {
                        title: '<p>11.1.2 Roles and responsibilities for performing activities in Requirement 11 are documented, assigned, and understood.</p>',
                        names: [
                            'inPlace_11_1_2',
                            'notApplicable_11_1_2',
                            'notTested_11_1_2',
                            'notInPlace_11_1_2',
                            'compensatingControl_11_1_2',
                            'customizedApproach_11_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.1.2.a Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 11 are documented and assigned.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_11_1_2',
                                },
                            },
                            {
                                td: {
                                    0: '11.1.2.b Interview personnel with responsibility for performing activities in Requirement 11 to verify that roles and responsibilities are assigned as documented and are understood.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_1_2',
                                },
                            },
                        ],
                    },
                },
            },
            11.2: {
                title: '<p>11.2 Wireless access points are identified and monitored, and unauthorized wireless access points are addressed.</p>',
                pciDss: {
                    '11.2.1': {
                        title: '<p>11.2.1 Authorized and unauthorized wireless access points are managed as follows:</p>\n                <ul>\n                    <li>The presence of wireless (Wi-Fi) access points is tested for.</li>\n                    <li>All authorized and unauthorized wireless access points are detected and identified.</li>\n                    <li>Testing, detection, and identification occurs at least once every three months.</li>\n                    <li>If automated monitoring is used, personnel are notified via generated alerts.</li>\n                </ul>',
                        names: [
                            'inPlace_11_2_1',
                            'notApplicable_11_2_1',
                            'notTested_11_2_1',
                            'notInPlace_11_2_1',
                            'compensatingControl_11_2_1',
                            'customizedApproach_11_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.2.1.a Examine policies and procedures to verify processes are defined for managing both authorized and unauthorized wireless access points with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'interviewsConducted_11_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '11.2.1.b Examine the methodology(ies) in use and the resulting documentation, and interview personnel to verify processes are defined to detect and identify both authorized and unauthorized wireless access points in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the methodology(ies) in use and resulting documentation examined for this testing procedure.',
                                    name: 'policiesExamined_11_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'methodologiesExamined_11_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '11.2.1.c Examine wireless assessment results and interview personnel to verify that wireless assessments were conducted in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all wireless assessment results examined for this testing procedure.',
                                    name: 'wirelessAssessmentResultsExamined_11_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConductedWireless_11_2_1',
                                },
                            },
                            {
                                td: {
                                    0: '11.2.1.d If automated monitoring is used, examine configuration settings to verify the configuration will generate alerts to notify personnel.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configurationSettingsExamined_11_2_1',
                                },
                            },
                        ],
                    },
                    '11.2.2': {
                        title: '<p>11.2.2 An inventory of authorized wireless access points is maintained, including a documented business justification.</p>',
                        names: [
                            'inPlace_11_2_2',
                            'notApplicable_11_2_2',
                            'notTested_11_2_2',
                            'notInPlace_11_2_2',
                            'compensatingControl_11_2_2',
                            'customizedApproach_11_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.2.2 Examine documentation to verify that an inventory of authorized wireless access points is maintained, and a business justification is documented for all authorized wireless access points.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_11_2_2',
                                },
                            },
                        ],
                    },
                },
            },
            11.3: {
                title: '<p>11.3 External and internal vulnerabilities are regularly identified, prioritized, and addressed.</p>',
                pciDss: {
                    '11.3.1': {
                        title: '<p>11.3 External and internal vulnerabilities are regularly identified, prioritized, and addressed.</p>',
                        pciRequirement:
                            "<p>11.3.1 Internal vulnerability scans are performed as follows:</p>\n                        <ul>\n                            <li>At least once every three months.</li>\n                            <li>Vulnerabilities that are either high-risk or critical (according to the entity's vulnerability risk rankings defined at Requirement 6.3.1) are resolved.</li>\n                            <li>Rescans are performed that confirm all high-risk and critical vulnerabilities (as noted above) have been resolved.</li>\n                            <li>Scan tool is kept up to date with latest vulnerability information.</li>\n                            <li>Scans are performed by qualified personnel and organizational independence of the tester exists.</li>\n                        </ul>",
                        names: [
                            'inPlace_11_3_1',
                            'notApplicable_11_3_1',
                            'notTested_11_3_1',
                            'notInPlace_11_3_1',
                            'compensatingControl_11_3_1',
                            'customizedApproach_11_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.1.a Examine internal scan report results from the last 12 months to verify that internal scans occurred at least once every three months in the most recent 12-month period.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all internal scan report results examined for this testing procedure.',
                                    name: 'internalScanReportResults_11_3_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.b Examine internal scan report results from each scan and rescan run in the last 12 months to verify that all high-risk vulnerabilities and all critical vulnerabilities (defined in PCI DSS Requirement 6.3.1) are resolved.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all internal scan report results examined for this testing procedure.',
                                    name: 'internalScanReportResults_11_3_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.c Examine scan tool configurations and interview personnel to verify that the scan tool is kept up to date with the latest vulnerability information.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all scan tool configurations examined for this testing procedure.',
                                    name: 'scanToolConfigurations_11_3_1_c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_c',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.d Interview responsible personnel to verify that the scan was performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsResponsiblePersonnel_11_3_1_d',
                                },
                            },
                        ],
                    },
                    '11.3.1.1': {
                        title: '<p>11.3.1.1 All other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity’s vulnerability risk rankings defined at Requirement 6.3.1) are managed as follows:</p>\n                <ul>\n                    <li>Addressed based on the risk defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.</li>\n                    <li>Rescans are conducted as needed.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_11_3_1_1',
                            'notApplicable_11_3_1_1',
                            'notTested_11_3_1_1',
                            'notInPlace_11_3_1_1',
                            'compensatingControl_11_3_1_1',
                            'customizedApproach_11_3_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.1.1.a Examine the entity’s targeted risk analysis that defines the risk for addressing all other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity’s vulnerability risk rankings at Requirement 6.3.1) to verify the risk analysis was performed in accordance with all elements specified at Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysis_11_3_1_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.1.b Interview responsible personnel and examine internal scan report results or other documentation to verify that all other applicable vulnerabilities (those not ranked as high-risk vulnerabilities or critical vulnerabilities according to the entity’s vulnerability risk rankings at Requirement 6.3.1) are addressed based on the risk defined in the entity’s targeted risk analysis, and that the scan process includes rescans as needed to confirm the vulnerabilities have been addressed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all internal scan report results or other documentation examined for this testing procedure.',
                                    name: 'internalScanResults_11_3_1_1_b',
                                },
                            },
                        ],
                    },
                    '11.3.1.2': {
                        title: '<p>11.3.1.2 Internal vulnerability scans are performed via authenticated scanning as follows:</p>\n                <ul>\n                    <li>Systems that are unable to accept credentials for authenticated scanning are documented.</li>\n                    <li>Sufficient privileges are used for those systems that accept credentials for scanning.</li>\n                    <li>If accounts used for authenticated scanning can be used for interactive login, they are managed in accordance with Requirement 8.2.2.</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_11_3_1_2',
                            'notApplicable_11_3_1_2',
                            'notTested_11_3_1_2',
                            'notInPlace_11_3_1_2',
                            'compensatingControl_11_3_1_2',
                            'customizedApproach_11_3_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.1.2.a Examine scan tool configurations to verify that authenticated scanning is used for internal scans, with sufficient privileges, for those systems that accept credentials for scanning.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all scan tool configurations examined for this testing procedure.',
                                    name: 'scanToolConfig_11_3_1_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.2.b Examine scan report results and interview personnel to verify that authenticated scans are performed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all examine scan report results examined for this testing procedure.',
                                    name: 'scanReportResults_11_3_1_2_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_2_b',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.2.c If accounts used for authenticated scanning can be used for interactive login, examine the accounts and interview personnel to verify the accounts are managed following all elements specified in Requirement 8.2.2.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all accounts examined for this testing procedure.',
                                    name: 'accountsExamined_11_3_1_2_c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_2_c',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.2.d Examine documentation to verify that systems that are unable to accept credentials for authenticated scanning are defined.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_11_3_1_2_d',
                                },
                            },
                        ],
                    },
                    '11.3.1.3': {
                        title: "<p>11.3.1.3 Internal vulnerability scans are performed after any significant change as follows:</p>\n                <ul>\n                    <li>Vulnerabilities that are either high-risk or critical (according to the entity's vulnerability risk rankings defined at Requirement 6.3.1) are resolved.</li>\n                    <li>Rescans are conducted as needed.</li>\n                    <li>Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).</li>\n                </ul>\n                <p><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>",
                        names: [
                            'inPlace_11_3_1_3',
                            'notApplicable_11_3_1_3',
                            'notTested_11_3_1_3',
                            'notInPlace_11_3_1_3',
                            'compensatingControl_11_3_1_3',
                            'customizedApproach_11_3_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.1.3.a Examine change control documentation and internal scan reports to verify that system components were scanned after any significant changes.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all change control documentation examined for this testing procedure.',
                                    name: 'changeControlDocumentation_11_3_1_3_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all internal scan reports examined for this testing procedure.',
                                    name: 'internalScanReports_11_3_1_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.3.b Interview personnel and examine internal scan and rescan reports to verify that internal scans were performed after significant changes and that all high-risk vulnerabilities and all critical vulnerabilities (defined in Requirement 6.3.1) were resolved.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_3_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all internal scan and rescan reports examined for this testing procedure.',
                                    name: 'internalScanRescanReports_11_3_1_3_b',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.1.3.c Interview personnel to verify that internal scans are performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_3_1_3_c',
                                },
                            },
                        ],
                    },
                    '11.3.2': {
                        title: '<p>11.3.2 External vulnerability scans are performed as follows:</p>\n                <ul>\n                    <li>At least once every three months.</li>\n                    <li>By PCI SSC Approved Scanning Vendor (ASV).</li>\n                    <li>Vulnerabilities are resolved and ASV Program Guide requirements for a passing scan are met.</li>\n                    <li>Rescans are performed as needed to confirm that vulnerabilities are resolved per the ASV Program Guide requirements for a passing scan.</li>\n                </ul>',
                        names: ['inPlace_11_3_2', 'notApplicable_11_3_2', 'notTested_11_3_2', 'notInPlace_11_3_2', 'compensatingControl_11_3_2'],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach Appendix C to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.2.a Examine ASV scan reports from the last 12 months to verify that external vulnerability scans occurred at least once every three months in the most recent 12-month period.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all ASV scan reports examined for this testing procedure.',
                                    name: 'asvScanReports_11_3_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.2.b Examine the ASV scan report from each scan and rescan run in the last 12 months to verify that vulnerabilities are resolved and the ASV Program Guide requirements for a passing scan are met.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all ASV scan report results examined for this testing procedure.',
                                    name: 'asvScanReportResults_11_3_2_b',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.2.c Examine the ASV scan reports to verify that the scans were completed by a PCI SSC Approved Scanning Vendor (ASV).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all ASV scan reports examined for this testing procedure.',
                                    name: 'asvScanReports_11_3_2_c',
                                },
                            },
                        ],
                    },
                    '11.3.2.1': {
                        title: '<p>11.3.2.1 External vulnerability scans are performed after any significant change as follows:</p>\n                <ul>\n                    <li>Vulnerabilities that are scored 4.0 or higher by the CVSS are resolved.</li>\n                    <li>Rescans are conducted as needed.</li>\n                    <li>Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).</li>\n                </ul>',
                        names: [
                            'inPlace_11_3_2_1',
                            'notApplicable_11_3_2_1',
                            'notTested_11_3_2_1',
                            'notInPlace_11_3_2_1',
                            'compensatingControl_11_3_2_1',
                            'customizedApproach_11_3_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_3_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.3.2.1.a Examine change control documentation and external scan reports to verify that system components were scanned after any significant changes.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all change control documentation examined for this testing procedure.',
                                    name: 'changeControlDocumentation_11_3_2_1_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all external scan reports examined for this testing procedure.',
                                    name: 'externalScanReports_11_3_2_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.2.1.b Interview personnel and examine external scan and rescan reports to verify that external scans were performed after significant changes and that vulnerabilities scored 4.0 or higher by the CVSS were resolved.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'externalScanRescanReports_11_3_2_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all external scan and rescan reports examined for this testing procedure.',
                                    name: 'externalScanReports_11_3_2_1_b',
                                },
                            },
                            {
                                td: {
                                    0: '11.3.2.1.c Interview personnel to verify that external scans are performed by a qualified internal resource(s) or qualified external third party and that organizational independence of the tester exists.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'qualifiedPersonnelInterviews_11_3_2_1_c',
                                },
                            },
                        ],
                    },
                },
            },
            11.4: {
                title: '<p>11.4 External and internal penetration testing is regularly performed, and exploitable vulnerabilities and security weaknesses are corrected.</p>',
                pciDss: {
                    '11.4.1': {
                        title: '<p>11.4.1 A penetration testing methodology is defined, documented, and implemented by the entity and includes:</p>\n                <ul>\n                    <li>Industry-accepted penetration testing approaches.</li>\n                    <li>Coverage for the entire CDE perimeter and critical systems.</li>\n                    <li>Testing from both inside and outside the network.</li>\n                    <li>Testing to validate any segmentation and scope-reduction controls.</li>\n                    <li>Application-layer penetration testing to identify, at a minimum, the vulnerabilities listed in Requirement 6.2.4.</li>\n                    <li>Network-layer penetration tests that encompass all components that support network functions as well as operating systems.</li>\n                    <li>Review and consideration of threats and vulnerabilities experienced in the last 12 months.</li>\n                    <li>Documented approach to assessing and addressing the risk posed by exploitable vulnerabilities and security weaknesses found during penetration testing.</li>\n                    <li>Retention of penetration testing results and remediation activities results for at least 12 months.</li>\n                </ul>',
                        names: [
                            'inPlace_11_4_1',
                            'notApplicable_11_4_1',
                            'notTested_11_4_1',
                            'notInPlace_11_4_1',
                            'compensatingControl_11_4_1',
                            'customizedApproach_11_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.1 Examine documentation and interview personnel to verify that the penetration-testing methodology defined, documented, and implemented by the entity includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'penetrationTestingDocumentation_11_4_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'penetrationTestingInterviews_11_4_1',
                                },
                            },
                        ],
                    },
                    '11.4.2': {
                        title: "<p>11.4.2 Internal penetration testing is performed:</p>\n                <ul>\n                    <li>Per the entity's defined methodology.</li>\n                    <li>At least once every 12 months.</li>\n                    <li>After any significant infrastructure or application upgrade or change.</li>\n                    <li>By a qualified internal resource or qualified external third party.</li>\n                    <li>Organizational independence of the tester exists (not required to be a QSA or ASV).</li>\n                </ul>",
                        names: [
                            'inPlace_11_4_2',
                            'notApplicable_11_4_2',
                            'notTested_11_4_2',
                            'notInPlace_11_4_2',
                            'compensatingControl_11_4_2',
                            'customizedApproach_11_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.2.a Examine the scope of work and results from the most recent internal penetration test to verify that penetration testing is performed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the scope of work examined for this testing procedure.',
                                    name: 'internalPenTestScope_11_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the results from the most recent internal penetration test examined for this testing procedure.',
                                    name: 'internalPenTestResults_11_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '11.4.2.b Interview personnel to verify that the internal penetration test was performed by a qualified internal resource or qualified external third-party and that organizational independence of the tester exists (not required to be a QSA or ASV).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'internalPenTestInterviews_11_4_2',
                                },
                            },
                        ],
                    },
                    '11.4.3': {
                        title: "<p>11.4.3 External penetration testing is performed:</p>\n                <ul>\n                    <li>Per the entity's defined methodology.</li>\n                    <li>At least once every 12 months.</li>\n                    <li>After any significant infrastructure or application upgrade or change.</li>\n                    <li>By a qualified internal resource or qualified external third party.</li>\n                    <li>Organizational independence of the tester exists (not required to be a QSA or ASV).</li>\n                </ul>",
                        names: [
                            'inPlace_11_4_3',
                            'notApplicable_11_4_3',
                            'notTested_11_4_3',
                            'notInPlace_11_4_3',
                            'compensatingControl_11_4_3',
                            'customizedApproach_11_4_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.3.a Examine the scope of work and results from the most recent external penetration test to verify that penetration testing is performed according to all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the scope of work examined for this testing procedure.',
                                    name: 'externalPenTestScope_11_4_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the results from the most recent external penetration test examined for this testing procedure.',
                                    name: 'externalPenTestResults_11_4_3',
                                },
                            },
                            {
                                td: {
                                    0: '11.4.3.b Interview personnel to verify that the external penetration test was performed by a qualified internal resource or qualified external third-party and that organizational independence of the tester exists (not required to be a QSA or ASV).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'externalPenTestInterviews_11_4_3',
                                },
                            },
                        ],
                    },
                    '11.4.4': {
                        title: "<p>11.4.4 Exploitable vulnerabilities and security weaknesses found during penetration testing are corrected as follows:</p>\n                <ul>\n                    <li>In accordance with the entity's assessment of the risk posed by the security issue as defined in Requirement 6.3.1.</li>\n                    <li>Penetration testing is repeated to verify the corrections.</li>\n                </ul>",
                        names: [
                            'inPlace_11_4_4',
                            'notApplicable_11_4_4',
                            'notTested_11_4_4',
                            'notInPlace_11_4_4',
                            'compensatingControl_11_4_4',
                            'customizedApproach_11_4_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.4 Examine penetration testing results to verify that noted exploitable vulnerabilities and security weaknesses were corrected in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all penetration testing results examined for this testing procedure.',
                                    name: 'penetrationTestingResults_11_4_4',
                                },
                            },
                        ],
                    },
                    '11.4.5': {
                        title: "<p>11.4.5 If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows:</p>\n                <ul>\n                    <li>At least once every 12 months and after any changes to segmentation controls/methods</li>\n                    <li>Covering all segmentation controls/methods in use</li>\n                    <li>According to the entity's defined penetration testing methodology</li>\n                    <li>Confirming that the segmentation controls/methods are operational and effective, and isolate the CDE from all out-of-scope systems</li>\n                    <li>Confirming effectiveness of any use of isolation to separate systems with differing security levels (see Requirement 2.2.3)</li>\n                    <li>Performed by a qualified internal resource or qualified external third party</li>\n                    <li>Organizational independence of the tester exists (not required to be a QSA or ASV)</li>\n                </ul>",
                        names: [
                            'inPlace_11_4_5',
                            'notApplicable_11_4_5',
                            'notTested_11_4_5',
                            'notInPlace_11_4_5',
                            'compensatingControl_11_4_5',
                            'customizedApproach_11_4_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.5.a Examine segmentation controls and review penetration-testing methodology to verify that penetration-testing procedures are defined to test all segmentation methods in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all segmentation controls examined for this testing procedure.',
                                    name: 'segmentationControlsExamined_11_4_5',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for the penetration testing methodology examined for this testing procedure.',
                                    name: 'penetrationTestingMethodology_11_4_5',
                                },
                            },
                            {
                                td: {
                                    0: '11.4.5.b Examine the results from the most recent penetration test to verify the penetration test covers and addresses all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all results from the most recent penetration test examined for this testing procedure.',
                                    name: 'penetrationTestResults_11_4_5',
                                },
                            },
                            {
                                td: {
                                    0: '11.4.5.c Interview personnel to verify that the test was performed by a qualified internal resource or qualified external third party and that organizational independence of the tester exists (not required to be a QSA or ASV).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_4_5',
                                },
                            },
                        ],
                    },
                    '11.4.6': {
                        title: "<p>11.4.6 Additional requirement for service providers only: If segmentation is used to isolate the CDE from other networks, penetration tests are performed on segmentation controls as follows:</p>\n                <ul>\n                    <li>At least once every six months and after any changes to segmentation controls/methods.</li>\n                    <li>Covering all segmentation controls/methods in use.</li>\n                    <li>According to the entity's defined penetration testing methodology.</li>\n                    <li>Confirming that the segmentation controls/methods are operational and effective, and isolate the CDE from all out-of-scope systems.</li>\n                    <li>Confirming effectiveness of any use of isolation to separate systems with differing security levels (see Requirement 2.2.3).</li>\n                    <li>Performed by a qualified internal resource or qualified external third party.</li>\n                    <li>Organizational independence of the tester exists (not required to be a QSA or ASV).</li>\n                </ul>",
                        names: [
                            'inPlace_11_4_6',
                            'notApplicable_11_4_6',
                            'notTested_11_4_6',
                            'notInPlace_11_4_6',
                            'compensatingControl_11_4_6',
                            'customizedApproach_11_4_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.6.a Additional testing procedure for service provider assessments only: Examine the results from the most recent penetration test to verify that the penetration covers and addresses all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the results from the most recent penetration test examined for this testing procedure.',
                                    name: 'penetrationTestResults_11_4_6',
                                },
                            },
                            {
                                td: {
                                    0: '11.4.6.b Additional testing procedure for service provider assessments only: Interview personnel to verify that the test was performed by a qualified internal resource or qualified external third party and that organizational independence of the tester exists (not required to be a QSA or ASV).',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_4_6',
                                },
                            },
                        ],
                    },
                    '11.4.7': {
                        title: '<p>11.4.7 Additional requirement for multi-tenant service providers only: Multi-tenant service providers support their customers for external penetration testing per Requirement 11.4.3 and 11.4.4.</p>\n                <i>\n                    <b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.\n                </i>',
                        names: [
                            'inPlace_11_4_7',
                            'notApplicable_11_4_7',
                            'notTested_11_4_7',
                            'notInPlace_11_4_7',
                            'compensatingControl_11_4_7',
                            'customizedApproach_11_4_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_4_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.4.7 Additional testing procedure for multi-tenant providers only: Examine evidence to verify that multi-tenant service providers support their customers for external penetration testing per Requirement 11.4.3 and 11.4.4.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all evidence examined for this testing procedure.',
                                    name: 'evidenceExamined_11_4_7',
                                },
                            },
                        ],
                    },
                },
            },
            11.5: {
                title: '<p>11.5 Network intrusions and unexpected file changes are detected and responded to.</p>',
                pciDss: {
                    '11.5.1': {
                        title: '<p>11.5.1 Intrusion-detection and/or intrusion-prevention techniques are used to detect and/or prevent intrusions into the network as follows:</p>\n                <ul>\n                    <li>All traffic is monitored at the perimeter of the CDE.</li>\n                    <li>All traffic is monitored at critical points in the CDE.</li>\n                    <li>Personnel are alerted to suspected compromises.</li>\n                    <li>All intrusion-detection and prevention engines, baselines, and signatures are kept up to date.</li>\n                </ul>',
                        names: [
                            'inPlace_11_5_1',
                            'notApplicable_11_5_1',
                            'notTested_11_5_1',
                            'notInPlace_11_5_1',
                            'compensatingControl_11_5_1',
                            'customizedApproach_11_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>11.5.1.a Examine system configurations and network diagrams to verify that intrusion-detection and/or intrusion-prevention techniques are in place to monitor all traffic:</p><ul>\n                    <li>At the perimeter of the CDE.</li>\n                    <li>At critical points in the CDE.</li>\n                 </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigs_11_5_1a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all network diagrams examined for this testing procedure.',
                                    name: 'networkDiagrams_11_5_1a',
                                },
                            },
                            {
                                td: {
                                    0: '11.5.1.b Examine system configurations and interview responsible personnel to verify intrusion-detection and/or intrusion-prevention techniques alert personnel of suspected compromises.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigs_11_5_1b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_11_5_1b',
                                },
                            },
                            {
                                td: {
                                    0: '11.5.1.c Examine system configurations and vendor documentation to verify intrusion-detection and/or intrusion-prevention techniques are configured to keep all engines, baselines, and signatures up to date.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'systemConfigs_11_5_1c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all vendor documentation examined for this testing procedure.',
                                    name: 'vendorDocs_11_5_1c',
                                },
                            },
                        ],
                    },
                    '11.5.1.1': {
                        title: '<p>11.5.1.1 Additional requirement for service providers only: Intrusion-detection and/or intrusion-prevention techniques detect, alert on/prevent, and address covert malware communication channels.</p>\n                <i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i>',
                        names: [
                            'inPlace_11_5_1_1',
                            'notApplicable_11_5_1_1',
                            'notTested_11_5_1_1',
                            'notInPlace_11_5_1_1',
                            'compensatingControl_11_5_1_1',
                            'customizedApproach_11_5_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_5_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.5.1.1.a Additional testing procedure for service provider assessments only: Examine documentation and configuration settings to verify that methods to detect and alert on/prevent covert malware communication channels are in place and operating.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentation_11_5_1_1a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configSettings_11_5_1_1a',
                                },
                            },
                            {
                                td: {
                                    0: '11.5.1.1.b Additional testing procedure for service provider assessments only: Examine the entity’s incident-response plan (Requirement 12.10.1) to verify it requires and defines a response in the event that covert malware communication channels are detected.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s incident-response plan examined for this testing procedure.',
                                    name: 'incidentResponsePlan_11_5_1_1b',
                                },
                            },
                            {
                                td: {
                                    0: '11.5.1.1.c Additional testing procedure for service provider assessments only: Interview responsible personnel and observe processes to verify that personnel maintain knowledge of covert malware communication and control techniques and are knowledgeable about how to respond when malware is suspected.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_11_5_1_1c',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of processes conducted for this testing procedure.',
                                    name: 'observations_11_5_1_1c',
                                },
                            },
                        ],
                    },
                    '11.5.2': {
                        title: '<p>11.5.2 A change-detection mechanism (for example, file integrity monitoring tools) is deployed as follows:</p>\n                <ul>\n                    <li>To alert personnel to unauthorized modification (including changes, additions, and deletions) of critical files.</li>\n                    <li>To perform critical file comparisons at least once weekly.</li>\n                </ul>',
                        names: [
                            'inPlace_11_5_2',
                            'notApplicable_11_5_2',
                            'notTested_11_5_2',
                            'notInPlace_11_5_2',
                            'compensatingControl_11_5_2',
                            'customizedApproach_11_5_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_5_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.5.2.a Examine system settings, monitored files, and results from monitoring activities to verify the use of a change-detection mechanism.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettings_11_5_2a',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all monitored files examined for this testing procedure.',
                                    name: 'monitoredFiles_11_5_2a',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all results from monitoring activities examined for this testing procedure.',
                                    name: 'monitoringResults_11_5_2a',
                                },
                            },
                            {
                                td: {
                                    0: '11.5.2.b Examine settings for the change-detection mechanism to verify it is configured in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all settings for the change-detection mechanism examined for this testing procedure.',
                                    name: 'settingsChangeDetection_11_5_2b',
                                },
                            },
                        ],
                    },
                },
            },
            11.6: {
                title: '<p>11.6 Unauthorized changes on payment pages are detected and responded to.</p>',
                pciDss: {
                    '11.6.1': {
                        title: '<p>11.6.1 A change- and tamper-detection mechanism is deployed as follows:</p>\n                <ul>\n                    <li>To alert personnel to unauthorized modification (including indicators of compromise, changes, additions, and deletions) to the security-impacting HTTP headers and the script contents of payment pages as received by the consumer browser.</li>\n                    <li>The mechanism is configured to evaluate the received HTTP headers and payment pages.</li>\n                    <li>The mechanism functions are performed as follows:</li>\n                    <ul>\n                        <li>At least once weekly</li>\n                        <li>OR periodically (at the frequency defined in the entity’s targeted risk analysis, performed according to Requirement 12.3.1).</li>\n                    </ul>\n                </ul>\n                <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i></p>',
                        names: [
                            'inPlace_11_6_1',
                            'notApplicable_11_6_1',
                            'notTested_11_6_1',
                            'notInPlace_11_6_1',
                            'compensatingControl_11_6_1',
                            'customizedApproach_11_6_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_11_6_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '11.6.1.a Examine system settings, monitored payment pages, and results from monitoring activities to verify the use of a change- and tamper-detection mechanism.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system settings examined for this testing procedure.',
                                    name: 'systemSettings_11_6_1a',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all monitoring activities examined for this testing procedure.',
                                    name: 'monitoringActivities_11_6_1a',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all results from monitoring activities examined for this testing procedure.',
                                    name: 'monitoringResults_11_6_1a',
                                },
                            },
                            {
                                td: {
                                    0: '11.6.1.b Examine configuration settings to verify the mechanism is configured in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configSettings_11_6_1b',
                                },
                            },
                            {
                                td: {
                                    0: '11.6.1.c If the mechanism functions are performed at an entity-defined frequency, examine the entity’s targeted risk analysis for determining the frequency to verify the risk analysis was performed in accordance with Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'targetedRiskAnalysis_11_6_1c',
                                },
                            },
                            {
                                td: {
                                    0: '<p>11.6.1.d Examine configuration settings and interview personnel to verify the mechanism functions are performed either:</p><ul>\n                    <li>At least once weekly</li>\n                    <li>OR at the frequency defined in the entity’s targeted risk analysis performed for this requirement.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all configuration settings examined for this testing procedure.',
                                    name: 'configSettingsFrequency_11_6_1d',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_11_6_1d',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_12: {
        title: 'Requirement 12: Support Information Security with Organizational Policies and Programs',
        descriptions: {
            12.1: {
                title: '<p>12.1 A comprehensive information security policy that governs and provides direction for protection of the entity’s information assets is known and current.</p>',
                pciDss: {
                    '12.1.1': {
                        title: '<p>12.1.1 An overall information security policy is:</p>\n                <ul>\n                    <li>Established.</li>\n                    <li>Published.</li>\n                    <li>Maintained.</li>\n                    <li>Disseminated to all relevant personnel, as well as to relevant vendors and business partners.</li>\n                </ul>',
                        names: [
                            'inPlace_12_1_1',
                            'notApplicable_12_1_1',
                            'notTested_12_1_1',
                            'notInPlace_12_1_1',
                            'compensatingControl_12_1_1',
                            'customizedApproach_12_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.1.1 Examine the information security policy and interview personnel to verify that the overall information security policy is managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the information security policy examined for this testing procedure.',
                                    name: 'infoSecurityPolicy_12_1_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_1_1',
                                },
                            },
                        ],
                    },
                    '12.1.2': {
                        title: '<p>12.1.2 The information security policy is:</p>\n                <ul>\n                    <li>Reviewed at least once every 12 months.</li>\n                    <li>Updated as needed to reflect changes to business objectives or risks to the environment.</li>\n                </ul>',
                        names: [
                            'inPlace_12_1_2',
                            'notApplicable_12_1_2',
                            'notTested_12_1_2',
                            'notInPlace_12_1_2',
                            'compensatingControl_12_1_2',
                            'customizedApproach_12_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.1.2 Examine the information security policy and interview responsible personnel to verify the policy is managed in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all information security policies examined for this testing procedure.',
                                    name: 'infoSecurityPolicyExamined_12_1_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_1_2',
                                },
                            },
                        ],
                    },
                    '12.1.3': {
                        title: '<p>12.1.3 The security policy clearly defines information security roles and responsibilities for all personnel, and all personnel are aware of and acknowledge their information security responsibilities.</p>',
                        names: [
                            'inPlace_12_1_3',
                            'notApplicable_12_1_3',
                            'notTested_12_1_3',
                            'notInPlace_12_1_3',
                            'compensatingControl_12_1_3',
                            'customizedApproach_12_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.1.3.a Examine the information security policy to verify that it clearly defines information security roles and responsibilities for all personnel.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the information security policy examined for this testing procedure.',
                                    name: 'infoSecurityPolicyExamined_12_1_3',
                                },
                            },
                            {
                                td: {
                                    0: '12.1.3.b Interview personnel in various roles to verify they understand their information security responsibilities.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_1_3',
                                },
                            },
                            {
                                td: {
                                    0: '12.1.3.c Examine documented evidence to verify personnel acknowledge their information security responsibilities.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented evidence examined for this testing procedure.',
                                    name: 'documentedEvidenceExamined_12_1_3',
                                },
                            },
                        ],
                    },
                    '12.1.4': {
                        title: '<p>12.1.4 Responsibility for information security is formally assigned to a Chief Information Security Officer or other information security knowledgeable member of executive management.</p>',
                        tableBody: [
                            {
                                td: {
                                    0: '12.1.4 Examine the information security policy to verify that information security is formally assigned to a Chief Information Security Officer or other information security-knowledgeable member of executive management.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the information security policy examined for this testing procedure.',
                                    name: 'infoSecurityPolicyExamined_12_1_4',
                                },
                            },
                        ],
                    },
                },
            },
            12.2: {
                title: '<p>12.2 Acceptable use policies for end-user technologies are defined and implemented.</p>',
                pciDss: {
                    '12.2.1': {
                        title: '<p>12.2.1 Acceptable use policies for end-user technologies are documented and implemented, including:</p>\n                <ul>\n                    <li>Explicit approval by authorized parties.</li>\n                    <li>Acceptable uses of the technology.</li>\n                    <li>List of products approved by the company for employee use, including hardware and software.</li>\n                </ul>',
                        names: [
                            'ss',
                            'notApplicable_12_2_1',
                            'notTested_12_2_1',
                            'notInPlace_12_2_1',
                            'compensatingControl_12_2_1',
                            'customizedApproach_12_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions.\n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.2.1 Examine the acceptable use policies for end-user technologies and interview responsible personnel to verify processes are documented and implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all acceptable use policies examined for this testing procedure.',
                                    name: 'acceptableUsePoliciesExamined_12_2_1',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_2_1',
                                },
                            },
                        ],
                    },
                },
            },
            12.3: {
                title: '<p>12.3 Risks to the cardholder data environment are formally identified, evaluated, and managed.</p>',
                pciDss: {
                    '12.3.1': {
                        title: '<p>12.3.1 For each PCI DSS requirement that specifies completion of a targeted risk analysis, the analysis is documented and includes:</p>\n        <ul>\n            <li>Identification of the assets being protected.</li>\n            <li>Identification of the threat(s) that the requirement is protecting against.</li>\n            <li>Identification of factors that contribute to the likelihood and/or impact of a threat being realized.</li>\n            <li>Resulting analysis that determines, and includes justification for, how the frequency or processes defined by the entity to meet the requirement minimize the likelihood and/or impact of the threat being realized.</li>\n            <li>Review of each targeted risk analysis at least once every 12 months to determine whether the results are still valid or if an updated risk analysis is needed.</li>\n            <li>Performance of updated risk analyses when needed, as determined by the annual review.</li>\n        </ul>',
                        names: [
                            'inPlace_12_3_1',
                            'notApplicable_12_3_1',
                            'notTested_12_3_1',
                            'notInPlace_12_3_1',
                            'compensatingControl_12_3_1',
                            'customizedApproach_12_3_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_3_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.3.1 Examine documented policies and procedures to verify a process is defined for performing targeted risk analyses for each PCI DSS requirement that specifies completion of a targeted risk analysis, and that the process includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented policies and procedures examined for this testing procedure.',
                                    name: 'policiesAndProceduresExamined_12_3_1',
                                },
                            },
                        ],
                    },
                    '12.3.2': {
                        title: '<p>12.3.2 A targeted risk analysis is performed for each PCI DSS requirement that the entity meets with the customized approach, to include:</p>\n                <ul>\n                    <li>Documented evidence detailing each element specified in Appendix D: Customized Approach (including, at a minimum, a controls matrix and risk analysis).</li>\n                    <li>Approval of documented evidence by senior management.</li>\n                    <li>Performance of the targeted analysis of risk at least once every 12 months.</li>\n                </ul>',
                        names: [
                            'inPlace_12_3_2',
                            'notApplicable_12_3_2',
                            'notTested_12_3_2',
                            'notInPlace_12_3_2',
                            'compensatingControl_12_3_2',
                            'customizedApproach_12_3_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach Appendix C to support this method.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_3_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.3.2 Examine the documented targeted risk-analysis for each PCI DSS requirement that the entity meets with the customized approach to verify that documentation for each requirement exists and is in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_3_2',
                                },
                            },
                        ],
                    },
                    '12.3.3': {
                        title: '<p>12.3.3 Cryptographic cipher suites and protocols in use are documented and reviewed at least once every 12 months, including at least the following:</p>\n                <ul>\n                    <li>An up-to-date inventory of all cryptographic cipher suites and protocols in use, including purpose and where used.</li>\n                    <li>Active monitoring of industry trends regarding continued viability of all cryptographic cipher suites and protocols in use.</li>\n                    <li>Documentation of a plan to respond to anticipated changes in cryptographic vulnerabilities.</li>\n                </ul>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_12_3_3',
                            'notApplicable_12_3_3',
                            'notTested_12_3_3',
                            'notInPlace_12_3_3',
                            'compensatingControl_12_3_3',
                            'customizedApproach_12_3_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_3_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.3.3 Examine documentation for cryptographic suites and protocols in use and interview personnel to verify the documentation and review is in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_3_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_3_3',
                                },
                            },
                        ],
                    },
                    '12.3.4': {
                        title: '<p>12.3.4 Hardware and software technologies in use are reviewed at least once every 12 months, including at least the following:</p>\n                <ul>\n                    <li>Analysis that the technologies continue to receive security fixes from vendors promptly.</li>\n                    <li>Analysis that the technologies continue to support (and do not preclude) the entity’s PCI DSS compliance.</li>\n                    <li>Documentation of any industry announcements or trends related to a technology, such as when a vendor has announced “end of life” plans for a technology.</li>\n                    <li>Documentation of a plan, approved by senior management, to remediate outdated technologies, including those for which vendors have announced “end of life” plans.</li>\n                </ul>\n                <p>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_12_3_4',
                            'notApplicable_12_3_4',
                            'notTested_12_3_4',
                            'notInPlace_12_3_4',
                            'compensatingControl_12_3_4',
                            'customizedApproach_12_3_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_3_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.3.4 Examine documentation for the review of hardware and software technologies in use and interview personnel to verify that the review is in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_3_4',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_3_4',
                                },
                            },
                        ],
                    },
                },
            },
            12.4: {
                title: '<p>12.4 PCI DSS compliance is managed.</p>',
                pciDss: {
                    '12.4.1': {
                        title: '<p>12.4.1 Additional requirement for service providers only: Responsibility is established by executive management for the protection of cardholder data and a PCI DSS compliance program to include:</p>\n                <ul>\n                    <li>Overall accountability for maintaining PCI DSS compliance.</li>\n                    <li>Defining a charter for a PCI DSS compliance program and communication to executive management.</li>\n                </ul>',
                        names: [
                            'inPlace_12_4_1',
                            'notApplicable_12_4_1',
                            'notTested_12_4_1',
                            'notInPlace_12_4_1',
                            'compensatingControl_12_4_1',
                            'customizedApproach_12_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.4.1 Additional testing procedure for service provider assessments only: Examine documentation to verify that executive management has established responsibility for the protection of cardholder data and a PCI DSS compliance program in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_4_1',
                                },
                            },
                        ],
                    },
                    '12.4.2': {
                        title: '<p>12.4.2 Additional requirement for service providers only: Reviews are performed at least once every three months to confirm that personnel are performing their tasks in accordance with all security policies and operational procedures. Reviews are performed by personnel other than those responsible for performing the given task and include, but are not limited to, the following tasks:</p>\n                <ul>\n                    <li>Daily log reviews.</li>\n                    <li>Configuration reviews for network security controls.</li>\n                    <li>Applying configuration standards to new systems.</li>\n                    <li>Responding to security alerts.</li>\n                    <li>Change-management processes.</li>\n                </ul>',
                        names: [
                            'inPlace_12_4_2',
                            'notApplicable_12_4_2',
                            'notTested_12_4_2',
                            'notInPlace_12_4_2',
                            'compensatingControl_12_4_2',
                            'customizedApproach_12_4_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_4_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.4.2.a Additional testing procedure for service provider assessments only: Examine policies and procedures to verify that processes are defined for conducting reviews to confirm that personnel are performing their tasks in accordance with all security policies and all operational procedures, including but not limited to the tasks specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesAndProceduresExamined_12_4_2',
                                },
                            },
                            {
                                td: {
                                    0: '12.4.2.b Additional testing procedure for service provider assessments only: Interview responsible personnel and examine records of reviews to verify that reviews are performed: \n                <ul>\n                    <li>At least once every three months.</li>\n                    <li>By personnel other than those responsible for performing the given task.</li>\n                </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_4_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all records of reviews examined for this testing procedure.',
                                    name: 'recordsOfReviewsExamined_12_4_2',
                                },
                            },
                        ],
                    },
                    '12.4.2.1': {
                        title: '<p>12.4.2.1 Additional requirement for service providers only: Reviews conducted in accordance with Requirement 12.4.2 are documented to include:</p>\n                <ul>\n                    <li>Results of the reviews.</li>\n                    <li>Documented remediation actions taken for any tasks that were found to not be performed at Requirement 12.4.2.</li>\n                    <li>Review and sign-off of results by personnel assigned responsibility for the PCI DSS compliance program.</li>\n                </ul>',
                        names: [
                            'inPlace_12_4_2_1',
                            'notApplicable_12_4_2_1',
                            'notTested_12_4_2_1',
                            'notInPlace_12_4_2_1',
                            'compensatingControl_12_4_2_1',
                            'customizedApproach_12_4_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_4_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.4.2.1 Additional testing procedure for service provider assessments only: Examine documentation from the reviews conducted in accordance with PCI DSS Requirement 12.4.2 to verify the documentation includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_4_2_1',
                                },
                            },
                        ],
                    },
                },
            },
            12.5: {
                title: '<p>12.5 PCI DSS scope is documented and validated.</p>',
                pciDss: {
                    '12.5.1': {
                        title: '<p>12.5.1 An inventory of system components that are in scope for PCI DSS, including a description of function/use, is maintained and kept current.</p>',
                        names: [
                            'inPlace_12_5_1',
                            'notApplicable_12_5_1',
                            'notTested_12_5_1',
                            'notInPlace_12_5_1',
                            'compensatingControl_12_5_1',
                            'customizedApproach_12_5_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_5_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.5.1.a Examine the inventory to verify it includes all in-scope system components and a description of function/use for each.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the inventory examined for this testing procedure.',
                                    name: 'inventoryExamined_12_5_1',
                                },
                            },
                            {
                                td: {
                                    0: '12.5.1.b Interview personnel to verify the inventory is kept current.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_5_1',
                                },
                            },
                        ],
                    },
                    '12.5.2': {
                        title: '<p>12.5.2 PCI DSS scope is documented and confirmed by the entity at least once every 12 months and upon significant change to the in-scope environment. At a minimum, the scoping validation includes:</p>\n                <ul>\n                    <li>Identifying all data flows for the various payment stages (for example, authorization, capture settlement, chargebacks, and refunds) and acceptance channels (for example, card-present, card-not-present, and e-commerce).</li>\n                    <li>Updating all data-flow diagrams per Requirement 1.2.4.</li>\n                    <li>Identifying all locations where account data is stored, processed, and transmitted, including but not limited to: 1) any locations outside of the currently defined CDE, 2) applications that process CHD, 3) transmissions between systems and networks, and 4) file backups.</li>\n                    <li>Identifying all system components in the CDE, connected to the CDE, or that could impact security of the CDE.</li>\n                    <li>Identifying all segmentation controls in use and the environment(s) from which the CDE is segmented, including justification for environments being out of scope.</li>\n                    <li>Identifying all connections from third-party entities with access to the CDE.</li>\n                    <li>Confirming that all identified data flows, account data, system components, segmentation controls, and connections from third parties with access to the CDE are included in scope.</li>\n                </ul>',
                        names: [
                            'inPlace_12_5_2',
                            'notApplicable_12_5_2',
                            'notTested_12_5_2',
                            'notInPlace_12_5_2',
                            'compensatingControl_12_5_2',
                            'customizedApproach_12_5_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        If applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_5_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>12.5.2.a Examine documented results of scope reviews and interview personnel to verify that the reviews are performed:</p>\n                        <ul>\n                            <li> At least once every 12 months.</li>\n                            <li>After significant changes to the in-scope environment.</li>\n                        </ul> ',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_5_2',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_5_2',
                                },
                            },
                            {
                                td: {
                                    0: '12.5.2.b Examine documented results of scope reviews performed by the entity to verify that PCI DSS scoping confirmation activity includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of scope reviews examined for this testing procedure.',
                                    name: 'scopeReviewResults_12_5_2',
                                },
                            },
                        ],
                    },
                    '12.5.2.1': {
                        title: '<p>12.5.2.1 Additional requirement for service providers only: PCI DSS scope is documented and confirmed by the entity at least once every six months and upon significant change to the in-scope environment. At a minimum, the scoping validation includes all the elements specified in Requirement 12.5.2.<br>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_12_5_2_1',
                            'notApplicable_12_5_2_1',
                            'notTested_12_5_2_1',
                            'notInPlace_12_5_2_1',
                            'compensatingControl_12_5_2_1',
                            'customizedApproach_12_5_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_5_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>12.5.2.1.a Additional testing procedure for service provider assessments only: Examine documented results of scope reviews and interview personnel to verify that reviews per Requirement 12.5.2 are performed:</p> \n                        <ul>\n                            <li>At least once every six months, and</li>\n                            <li>• After significant changes.</li>\n                        </ul>',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of scope reviews examined for this testing procedure.',
                                    name: 'scopeReviewResults_12_5_2_1_a',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'scopeReviewInterviews_12_5_2_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.5.2.1.b Additional testing procedure for service provider assessments only: Examine documented results of scope reviews to verify that scoping validation includes all elements specified in Requirement 12.5.2.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results of scope reviews examined for this testing procedure.',
                                    name: 'scopeReviewValidation_12_5_2_1_b',
                                },
                            },
                        ],
                    },
                    '12.5.3': {
                        title: '<p>12.5.3 Additional requirement for service providers only: Significant changes to organizational structure result in a documented (internal) review of the impact to PCI DSS scope and applicability of controls, with results communicated to executive management.<br>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</p>',
                        names: [
                            'inPlace_12_5_3',
                            'notApplicable_12_5_3',
                            'notTested_12_5_3',
                            'notInPlace_12_5_3',
                            'compensatingControl_12_5_3',
                            'customizedApproach_12_5_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_5_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.5.3.a Additional testing procedure for service provider assessments only: Examine policies and procedures to verify that processes are defined such that a significant change to organizational structure results in documented review of the impact to PCI DSS scope and applicability of controls.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'policiesProcedures_12_5_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.5.3.b Additional testing procedure for service provider assessments only: Examine documentation (for example, meeting minutes) and interview responsible personnel to verify that significant changes to organizational structure resulted in documented reviews that included all elements specified in this requirement, with results communicated to executive management.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'documentationExamined_12_5_3_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviewsConducted_12_5_3_b',
                                },
                            },
                        ],
                    },
                },
            },
            12.6: {
                title: '<p>12.6 Security awareness education is an ongoing activity.</p>',
                pciDss: {
                    '12.6.1': {
                        title: '<p>12.6.1 A formal security awareness program is implemented to make all personnel aware of the entity’s information security policy and procedures, and their role in protecting the cardholder data.</p>',
                        names: [
                            'inPlace_12_6_1',
                            'notApplicable_12_6_1',
                            'notTested_12_6_1',
                            'notInPlace_12_6_1',
                            'compensatingControl_12_6_1',
                            'customizedApproach_12_6_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_6_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.6.1 Examine the security awareness program to verify it provides awareness to all personnel about the entity’s information security policy and procedures, and personnel’s role in protecting the cardholder data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the security awareness program examined for this testing procedure.',
                                    name: 'securityAwarenessProgram_12_6_1',
                                },
                            },
                        ],
                    },
                    '12.6.2': {
                        title: "<p>12.6.2 The security awareness program is: <br>\n                • Reviewed at least once every 12 months, and <br>\n                • Updated as needed to address any new threats and vulnerabilities that may impact the security of the entity's cardholder data and/or sensitive authentication data, or the information provided to personnel about their role in protecting cardholder data.</p>",
                        names: [
                            'inPlace_12_6_2',
                            'notApplicable_12_6_2',
                            'notTested_12_6_2',
                            'notInPlace_12_6_2',
                            'compensatingControl_12_6_2',
                            'customizedApproach_12_6_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_6_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.6.2 Examine security awareness program content, evidence of reviews, and interview personnel to verify that the security awareness program is in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness program content examined for this testing procedure.',
                                    name: 'securityAwarenessProgramContent_12_6_2',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all evidence of reviews examined for this testing procedure.',
                                    name: 'evidenceOfReviews_12_6_2',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'interviews_12_6_2',
                                },
                            },
                        ],
                    },
                    '12.6.3': {
                        title: '<p>12.6.3 Personnel receive security awareness training as follows:</p>\n                <ul>\n                    <li>Upon hire and at least once every 12 months.</li>\n                    <li>Multiple methods of communication are used.</li>\n                    <li>Personnel acknowledge at least once every 12 months that they have read and understood the information security policy and procedures.</li>\n                </ul>',
                        names: [
                            'inPlace_12_6_3',
                            'notApplicable_12_6_3',
                            'notTested_12_6_3',
                            'notInPlace_12_6_3',
                            'compensatingControl_12_6_3',
                            'customizedApproach_12_6_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_6_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.6.3.a Examine security awareness program records to verify that personnel attend security awareness training upon hire and at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness program records examined for this testing procedure.',
                                    name: 'securityAwarenessProgramRecords_12_6_3',
                                },
                            },
                            {
                                td: {
                                    0: '12.6.3.b Examine security awareness program materials to verify the program includes multiple methods of communicating awareness and educating personnel.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness program materials examined for this testing procedure.',
                                    name: 'securityAwarenessProgramMaterials_12_6_3',
                                },
                            },
                            {
                                td: {
                                    0: '12.6.3.c Interview personnel to verify they have completed awareness training and are aware of their role in protecting cardholder data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'personnelInterviews_12_6_3',
                                },
                            },
                            {
                                td: {
                                    0: '12.6.3.d Examine security awareness program materials and personnel acknowledgments to verify that personnel acknowledge at least once every 12 months that they have read and understand the information security policy and procedures.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness program materials examined for this testing procedure.',
                                    name: 'acknowledgmentMaterials_12_6_3',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all personnel acknowledgments examined for this testing procedure.',
                                    name: 'personnelAcknowledgments_12_6_3',
                                },
                            },
                        ],
                    },
                    '12.6.3.1': {
                        title: '<p>12.6.3.1 Security awareness training includes awareness of threats and vulnerabilities that could impact the security of cardholder data and/or sensitive authentication data, including but not limited to:</p>\n                <ul>\n                    <li>Phishing and related attacks.</li>\n                    <li>Social engineering.</li>\n                </ul>',
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_6_3_1',
                        },
                        names: [
                            'inPlace_12_6_3_1',
                            'notApplicable_12_6_3_1',
                            'notTested_12_6_3_1',
                            'notInPlace_12_6_3_1',
                            'compensatingControl_12_6_3_1',
                            'customizedApproach_12_6_3_1',
                        ],
                        tableBody: [
                            {
                                td: {
                                    0: '12.6.3.1 Examine security awareness training content to verify it includes all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness training content examined for this testing procedure.',
                                    name: 'securityAwarenessTrainingContent_12_6_3_1',
                                },
                            },
                        ],
                    },
                    '12.6.3.2': {
                        title: '<p>12.6.3.2 Security awareness training includes awareness about the acceptable use of end-user technologies in accordance with Requirement 12.2.1.</p>\n                <i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment. </i>',
                        tableBody: [
                            {
                                td: {
                                    0: '12.6.3.2 Examine security awareness training content to verify it includes awareness about acceptable use of end-user technologies in accordance with Requirement 12.2.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all security awareness training content examined for this testing procedure.',
                                    name: 'securityAwarenessTrainingContent_12_6_3_2',
                                },
                            },
                        ],
                    },
                },
            },
            12.7: {
                title: '<p>12.7 Personnel are screened to reduce risks from insider threats.</p>',
                pciDss: {
                    '12.7.1': {
                        title: '<p>12.7.1 Potential personnel who will have access to the CDE are screened, within the constraints of local laws, prior to hire to minimize the risk of attacks from internal sources.</p>',
                        names: [
                            'inPlace_12_7_1',
                            'notApplicable_12_7_1',
                            'notTested_12_7_1',
                            'notInPlace_12_7_1',
                            'compensatingControl_12_7_1',
                            'customizedApproach_12_7_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_7_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.7.1 Interview responsible Human Resource department management to verify that screening is conducted, within the constraints of local laws, prior to hiring potential personnel who will have access to the CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_7_1',
                                },
                            },
                        ],
                    },
                },
            },
            12.8: {
                title: '<p>12.8 Risk to information assets associated with third-party service provider (TPSP) relationships is managed.</p>',
                pciDss: {
                    '12.8.1': {
                        title: '<p>12.8.1 A list of all third-party service providers (TPSPs) with which account data is shared or that could affect the security of account data is maintained, including a description for each of the services provided.</p>',
                        names: [
                            'inPlace_12_8_1',
                            'notApplicable_12_8_1',
                            'notTested_12_8_1',
                            'notInPlace_12_8_1',
                            'compensatingControl_12_8_1',
                            'customizedApproach_12_8_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_8_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.8.1.a Examine policies and procedures to verify that processes are defined to maintain a list of TPSPs, including a description for each of the services provided, for all TPSPs with whom account data is shared or that could affect the security of account data.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.8.1.b Examine documentation to verify that a list of all TPSPs is maintained that includes a description of the services provided.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_1_b',
                                },
                            },
                        ],
                    },
                    '12.8.2': {
                        title: "<p>12.8.2 Written agreements with TPSPs are maintained as follows:</p>\n                <ul>\n                    <li>Written agreements are maintained with all TPSPs with which account data is shared or that could affect the security of the CDE.</li>\n                    <li>Written agreements include acknowledgments from TPSPs that TPSPs are responsible for the security of account data the TPSPs possess or otherwise store, process, or transmit on behalf of the entity, or to the extent that the TPSP could impact the security of the entity's cardholder data and/or sensitive authentication data.</li>\n                </ul>",
                        names: [
                            'inPlace_12_8_2',
                            'notApplicable_12_8_2',
                            'notTested_12_8_2',
                            'notInPlace_12_8_2',
                            'compensatingControl_12_8_2',
                            'customizedApproach_12_8_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n                    <i>\n                        <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                        *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n                    </i>',
                            name: 'describeWhyTheAssessment_12_8_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.8.2.a Examine policies and procedures to verify that processes are defined to maintain written agreements with all TPSPs in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_2_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.8.2.b Examine written agreements with TPSPs to verify they are maintained in accordance with all elements as specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all written agreements examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_2_b',
                                },
                            },
                        ],
                    },
                    '12.8.3': {
                        title: '<p>12.8.3 An established process is implemented for engaging TPSPs, including proper due diligence prior to engagement.</p>',
                        names: [
                            'inPlace_12_8_3',
                            'notApplicable_12_8_3',
                            'notTested_12_8_3',
                            'notInPlace_12_8_3',
                            'compensatingControl_12_8_3',
                            'customizedApproach_12_8_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_8_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.8.3.a Examine policies and procedures to verify that processes are defined for engaging TPSPs, including proper due diligence prior to engagement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_3_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.8.3.b Examine evidence and interview responsible personnel to verify the process for engaging TPSPs includes proper due diligence prior to engagement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all evidence examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_3_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_3_interviews',
                                },
                            },
                        ],
                    },
                    '12.8.4': {
                        title: '<p>12.8.4 A program is implemented to monitor TPSPs’ PCI DSS compliance status at least once every 12 months.</p>',
                        names: [
                            'inPlace_12_8_4',
                            'notApplicable_12_8_4',
                            'notTested_12_8_4',
                            'notInPlace_12_8_4',
                            'compensatingControl_12_8_4',
                            'customizedApproach_12_8_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_8_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.8.4.a Examine policies and procedures to verify that processes are defined to monitor TPSPs’ PCI DSS compliance status at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_4_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.8.4.b Examine documentation and interview responsible personnel to verify that the PCI DSS compliance status of each TPSP is monitored at least once every 12 months.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_4_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_4_interviews',
                                },
                            },
                        ],
                    },
                    '12.8.5': {
                        title: '<p>12.8.5 Information is maintained about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between the TPSP and the entity.</p>',
                        names: [
                            'inPlace_12_8_5',
                            'notApplicable_12_8_5',
                            'notTested_12_8_5',
                            'notInPlace_12_8_5',
                            'compensatingControl_12_8_5',
                            'customizedApproach_12_8_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_8_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.8.5.a Examine policies and procedures to verify that processes are defined to maintain information about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between both the TPSP and the entity.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_5_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.8.5.b Examine documentation and interview personnel to verify the entity maintains information about which PCI DSS requirements are managed by each TPSP, which are managed by the entity, and any that are shared between both entities.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_5_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_8_5_interviews',
                                },
                            },
                        ],
                    },
                },
            },
            12.9: {
                title: '<p>12.9 Third-party service providers (TPSPs) support their customers’ PCI DSS compliance.</p>',
                pciDss: {
                    '12.9.1': {
                        title: '<p>12.9.1 Additional requirement for service providers only: TPSPs provide written agreements to customers that include acknowledgements that TPSPs are responsible for the security of account data the TPSP possesses or otherwise stores, processes, or transmits on behalf of the customer, or to the extent that the TPSP could impact the security of the customer’s cardholder data and/or sensitive authentication data.</p>',
                        names: [
                            'inPlace_12_9_1',
                            'notApplicable_12_9_1',
                            'notTested_12_9_1',
                            'notInPlace_12_9_1',
                            'compensatingControl_12_9_1',
                            'customizedApproach_12_9_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_9_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.9.1 Additional testing procedure for service provider assessments only: Examine TPSP policies, procedures, and templates used for written agreements to verify processes are defined for the TPSP to provide written acknowledgments to customers in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all TPSP policies, procedures, and templates used for written agreements examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_9_1',
                                },
                            },
                        ],
                    },
                    '12.9.2': {
                        title: "<p>12.9.2 Additional requirement for service providers only: TPSPs support their customers' requests for information to meet Requirements 12.8.4 and 12.8.5 by providing the following upon customer request:</p>\n        <ul>\n            <li>PCI DSS compliance status information (Requirement 12.8.4).</li>\n            <li>Information about which PCI DSS requirements are the responsibility of the TPSP and which are the responsibility of the customer, including any shared responsibilities (Requirement 12.8.5), for any service the TPSP provides that meets a PCI DSS requirement(s) on behalf of customers or that can impact the security of customers’ cardholder data and/or sensitive authentication data.</li>\n        </ul>",
                        names: [
                            'inPlace_12_9_2',
                            'notApplicable_12_9_2',
                            'notTested_12_9_2',
                            'notInPlace_12_9_2',
                            'compensatingControl_12_9_2',
                            'customizedApproach_12_9_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_9_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.9.2 Additional testing procedure for service provider assessments only: Examine policies and procedures to verify processes are defined for the TPSPs to support customers’ request for information to meet Requirements 12.8.4 and 12.8.5 in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_9_2',
                                },
                            },
                        ],
                    },
                },
            },
            '12.10': {
                title: '<p>12.10 Suspected and confirmed security incidents that could impact the CDE are responded to immediately.</p>',
                pciDss: {
                    '12.10.1': {
                        title: '<p>12.10.1 An incident response plan exists and is ready to be activated in the event of a suspected or confirmed security incident. The plan includes, but is not limited to:</p>\n        <ul>\n            <li>Roles, responsibilities, and communication and contact strategies in the event of a suspected or confirmed security incident, including notification of payment brands and acquirers, at a minimum.</li>\n            <li>Incident response procedures with specific containment and mitigation activities for different types of incidents.</li>\n            <li>Business recovery and continuity procedures.</li>\n            <li>Data backup processes.</li>\n            <li>Analysis of legal requirements for reporting compromises.</li>\n            <li>Coverage and responses of all critical system components.</li>\n            <li>Reference or inclusion of incident response procedures from the payment brands.</li>\n        </ul>',
                        names: [
                            'inPlace_12_10_1',
                            'notApplicable_12_10_1',
                            'notTested_12_10_1',
                            'notInPlace_12_10_1',
                            'compensatingControl_12_10_1',
                            'customizedApproach_12_10_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.1.a Examine the incident response plan to verify that the plan exists and includes at least the elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all incident response plans examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_1_a',
                                },
                            },
                            {
                                td: {
                                    0: '12.10.1.b Interview personnel and examine documentation from previously reported incidents or alerts to verify that the documented incident response plan and procedures were followed.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_1_b',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_1_docs',
                                },
                            },
                        ],
                    },
                    '12.10.2': {
                        title: '<p>12.10.2 At least once every 12 months, the security incident response plan is:</p>\n        <ul>\n            <li>Reviewed and the content is updated as needed.</li>\n            <li>Tested, including all elements listed in Requirement 12.10.1.</li>\n        </ul>',
                        names: [
                            'inPlace_12_10_2',
                            'notApplicable_12_10_2',
                            'notTested_12_10_2',
                            'notInPlace_12_10_2',
                            'compensatingControl_12_10_2',
                            'customizedApproach_12_10_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '<p>12.10.2 Interview personnel and review documentation to verify that, at least once every 12 months, the security incident response plan is:</p>\n                            <ul>\n                                <li>Reviewed and updated as needed.</li>\n                                <li>Tested, including all elements listed in Requirement 12.10.1.</li>\n                            </ul>\n                        ',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_2_interviews',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_2_docs',
                                },
                            },
                        ],
                    },
                    '12.10.3': {
                        title: '<p>12.10.3 Specific personnel are designated to be available on a 24/7 basis to respond to suspected or confirmed security incidents.</p>',
                        names: [
                            'inPlace_12_10_3',
                            'notApplicable_12_10_3',
                            'notTested_12_10_3',
                            'notInPlace_12_10_3',
                            'compensatingControl_12_10_3',
                            'customizedApproach_12_10_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.3 Examine documentation and interview responsible personnel occupying designated roles to verify that specific personnel are designated to be available on a 24/7 basis to respond to security incidents.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_3_docs',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_3_interviews',
                                },
                            },
                        ],
                    },
                    '12.10.4': {
                        title: '<p>12.10.4 Personnel responsible for responding to suspected and confirmed security incidents are appropriately and periodically trained on their incident response responsibilities.</p>',
                        names: [
                            'inPlace_12_10_4',
                            'notApplicable_12_10_4',
                            'notTested_12_10_4',
                            'notInPlace_12_10_4',
                            'compensatingControl_12_10_4',
                            'customizedApproach_12_10_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.4 Examine training documentation and interview incident response personnel to verify that personnel are appropriately and periodically trained on their incident response responsibilities.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_4_docs',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_4_interviews',
                                },
                            },
                        ],
                    },
                    '12.10.4.1': {
                        title: '<p>12.10.4.1 The frequency of periodic training for incident response personnel is defined in the entity’s targeted risk analysis, which is performed according to all elements specified in Requirement 12.3.1.</p>\n        <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i></p>',
                        names: [
                            'inPlace_12_10_4_1',
                            'notApplicable_12_10_4_1',
                            'notTested_12_10_4_1',
                            'notInPlace_12_10_4_1',
                            'compensatingControl_12_10_4_1',
                            'customizedApproach_12_10_4_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_4_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.4.1.a Examine the entity’s targeted risk analysis for the frequency of training for incident response personnel to verify the risk analysis was performed in accordance with all elements specified in Requirement 12.3.1.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the entity’s targeted risk analysis examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_4_1_analysis',
                                },
                            },
                            {
                                td: {
                                    0: '12.10.4.1.b Examine documented results of periodic training of incident response personnel and interview personnel to verify training is performed at the frequency defined in the entity’s targeted risk analysis performed for this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documented results examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_4_1_results',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_4_1_interviews',
                                },
                            },
                        ],
                    },
                    '12.10.5': {
                        title: '<p>12.10.5 The security incident response plan includes monitoring and responding to alerts from security monitoring systems, including but not limited to:</p>\n        <ul>\n            <li>Intrusion-detection and intrusion-prevention systems.</li>\n            <li>Network security controls.</li>\n            <li>Change-detection mechanisms for critical files.</li>\n            <li>The change-and tamper-detection mechanism for payment pages. <i>This bullet is a best practice until 31 March 2025, after which it will be required as part of Requirement 12.10.5 and must be fully considered during a PCI DSS assessment.</i></li>\n            <li>Detection of unauthorized wireless access points.</li>\n        </ul>',
                        names: [
                            'inPlace_12_10_5',
                            'notApplicable_12_10_5',
                            'notTested_12_10_5',
                            'notInPlace_12_10_5',
                            'compensatingControl_12_10_5',
                            'customizedApproach_12_10_5',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_5',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.5 Examine documentation and observe incident response processes to verify that monitoring and responding to alerts from security monitoring systems are covered in the security incident response plan, including but not limited to the systems specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_5_documentation',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all observations of incident response processes for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_5_observations',
                                },
                            },
                        ],
                    },
                    '12.10.6': {
                        title: '<p>12.10.6 The security incident response plan is modified and evolved according to lessons learned and to incorporate industry developments.</p>',
                        names: [
                            'inPlace_12_10_6',
                            'notApplicable_12_10_6',
                            'notTested_12_10_6',
                            'notInPlace_12_10_6',
                            'compensatingControl_12_10_6',
                            'customizedApproach_12_10_6',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_6',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.6.a Examine policies and procedures to verify that processes are defined to modify and evolve the security incident response plan according to lessons learned and to incorporate industry developments.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all policies and procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_6_policies',
                                },
                            },
                            {
                                td: {
                                    0: '12.10.6.b Examine the security incident response plan and interview responsible personnel to verify that the incident response plan is modified and evolved according to lessons learned and to incorporate industry developments.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the security incident response plan examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_6_plan',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'allInterviews_12_10_6',
                                },
                            },
                        ],
                    },
                    '12.10.7': {
                        title: '<p>12.10.7 Incident response procedures are in place, to be initiated upon the detection of stored PAN anywhere it is not expected, and include:</p>\n    <ul>\n        <li>Determining what to do if PAN is discovered outside the CDE, including its retrieval, secure deletion, and/or migration into the currently defined CDE, as applicable.</li>\n        <li>Identifying whether sensitive authentication data is stored with PAN.</li>\n        <li>Determining where the account data came from and how it ended up where it was not expected.</li>\n        <li>Remediating data leaks or process gaps that resulted in the account data being where it was not expected.</li>\n    </ul>\n    <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i></p>',
                        names: [
                            'inPlace_12_10_7',
                            'notApplicable_12_10_7',
                            'notTested_12_10_7',
                            'notInPlace_12_10_7',
                            'compensatingControl_12_10_7',
                            'customizedApproach_12_10_7',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_12_10_7',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: '12.10.7.a Examine documented incident response procedures to verify that procedures for responding to the detection of stored PAN anywhere it is not expected to exist, ready to be initiated, and include all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented incident response procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_7_procedures',
                                },
                            },
                            {
                                td: {
                                    0: '12.10.7.b Interview personnel and examine records of response actions to verify that incident response procedures are performed upon detection of stored PAN anywhere it is not expected.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_12_10_7_interviews',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all records of response actions examined for this testing procedure.',
                                    name: 'allRecordsResponse_12_10_7_interviews',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    requirement_A1: {
        title: 'A1\tAdditional PCI DSS Requirements for Multi-Tenant Service Providers',
        descriptions: {
            'A1.1': {
                title: '<p>A1.1 Multi-tenant service providers protect and separate all customer environments and data.</p>',
                pciDss: {
                    'A1.1.1': {
                        title: "<p>A1.1.1 Logical separation is implemented as follows:</p>\n                        <ul>\n                            <li>The provider cannot access its customers' environments without authorization.</li>\n                            <li>Customers cannot access the provider's environment without authorization.</li>\n                        </ul>\n                        <p><i>Note: This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i></p>",
                        names: [
                            'inPlace_A1_1_1',
                            'notApplicable_A1_1_1',
                            'notTested_A1_1_1',
                            'notInPlace_A1_1_1',
                            'compensatingControl_A1_1_1',
                            'customizedApproach_A1_1_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_1_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.1.1 Examine documentation and system and network configurations and interview personnel to verify that logical separation is implemented in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_1_documentation',
                                },
                                rowspan: 3,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system and network configurations examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_1_configurations',
                                },
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_1_interviews',
                                },
                            },
                        ],
                    },
                    'A1.1.2': {
                        title: '<p>A1.1.2 Controls are implemented such that each customer only has permission to access its own cardholder data and CDE.</p>',
                        names: [
                            'inPlace_A1_1_2',
                            'notApplicable_A1_1_2',
                            'notTested_A1_1_2',
                            'notInPlace_A1_1_2',
                            'compensatingControl_A1_1_2',
                            'customizedApproach_A1_1_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_1_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.1.2.a Examine documentation to verify controls are defined such that each customer only has permission to access its own cardholder data and CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_2_documentation',
                                },
                            },
                            {
                                td: {
                                    0: 'A1.1.2.b Examine system configurations to verify that customers have privileges established to only access their own account data and CDE.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all system configurations examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_2_configurations',
                                },
                            },
                        ],
                    },
                    'A1.1.3': {
                        title: '<p>A1.1.3 Controls are implemented such that each customer can only access resources allocated to them.</p>',
                        names: [
                            'inPlace_A1_1_3',
                            'notApplicable_A1_1_3',
                            'notTested_A1_1_3',
                            'notInPlace_A1_1_3',
                            'compensatingControl_A1_1_3',
                            'customizedApproach_A1_1_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_1_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.1.3 Examine customer privileges to verify each customer can only access resources allocated to them.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all customer privileges examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_3_privileges',
                                },
                            },
                        ],
                    },
                    'A1.1.4': {
                        title: '<p>A1.1.4 The effectiveness of logical separation controls used to separate customer environments is confirmed at least once every six months via penetration testing.</p>',
                        names: [
                            'inPlace_A1_1_4',
                            'notApplicable_A1_1_4',
                            'notTested_A1_1_4',
                            'notInPlace_A1_1_4',
                            'compensatingControl_A1_1_4',
                            'customizedApproach_A1_1_4',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_1_4',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.1.4 Examine the results from the most recent penetration test to verify that testing confirmed the effectiveness of logical separation controls used to separate customer environments.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the results from the most recent penetration test examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_1_4_penetrationTest',
                                },
                            },
                        ],
                    },
                },
            },
            'A1.2': {
                title: '<p>A1.2 Multi-tenant service providers facilitate logging and incident response for all customers.</p>',
                pciDss: {
                    'A1.2.1': {
                        title: "<p>A1.2.1 Audit log capability is enabled for each customer's environment that is consistent with PCI DSS Requirement 10, including:</p>\n                <ul>\n                    <li>Logs are enabled for common third-party applications.</li>\n                    <li>Logs are active by default.</li>\n                    <li>Logs are available for review only by the owning customer.</li>\n                    <li>Log locations are clearly communicated to the owning customer.</li>\n                    <li>Log data and availability is consistent with PCI DSS Requirement 10.</li>\n                </ul>",
                        names: [
                            'inPlace_A1_2_1',
                            'notApplicable_A1_2_1',
                            'notTested_A1_2_1',
                            'notInPlace_A1_2_1',
                            'compensatingControl_A1_2_1',
                            'customizedApproach_A1_2_1',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_2_1',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.2.1 Examine documentation and system configuration settings to verify the provider has enabled audit log capability for each customer environment in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for all documentation examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_2_1_documentation',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all system configuration settings examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_2_1_systemConfiguration',
                                },
                            },
                        ],
                    },
                    'A1.2.2': {
                        title: '<p>A1.2.2 Processes or mechanisms are implemented to support and/or facilitate prompt forensic investigations in the event of a suspected or confirmed security incident for any customer.</p>',
                        names: [
                            'inPlace_A1_2_2',
                            'notApplicable_A1_2_2',
                            'notTested_A1_2_2',
                            'notInPlace_A1_2_2',
                            'compensatingControl_A1_2_2',
                            'customizedApproach_A1_2_2',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i>\n                <b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n                *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.\n            </i>',
                            name: 'describeWhyTheAssessment_A1_2_2',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.2.2 Examine documented procedures to verify that the provider has processes or mechanisms to support and/or facilitate a prompt forensic investigation of related servers in the event of a suspected or confirmed security incident for any customer.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_2_2_documentedProcedures',
                                },
                            },
                        ],
                    },
                    'A1.2.3': {
                        title: '<p>A1.2.3 Processes or mechanisms are implemented for reporting and addressing suspected or confirmed security incidents and vulnerabilities, including:</p>\n        <ul>\n            <li>Customers can securely report security incidents and vulnerabilities to the provider.</li>\n            <li>The provider addresses and remediates suspected or confirmed security incidents and vulnerabilities according to Requirement 6.3.1.</li>\n        </ul>\n        <i><b>Note:</b> This requirement is a best practice until 31 March 2025, after which it will be required and must be fully considered during a PCI DSS assessment.</i>',
                        names: [
                            'inPlace_A1_2_3',
                            'notApplicable_A1_2_3',
                            'notTested_A1_2_3',
                            'notInPlace_A1_2_3',
                            'compensatingControl_A1_2_3',
                            'customizedApproach_A1_2_3',
                        ],
                        note: {
                            title: '<p>Describe why the assessment finding was selected.</p>\n            <i><b>Note:</b> Include all details as noted in the “Required Reporting” column of the table in Assessment Findings in the ROC Template Instructions. \n            *As applicable, complete and attach the corresponding documentation (Appendix C, Appendix E, or both) to support the method(s) used.</i>',
                            name: 'describeWhyTheAssessment_A1_2_3',
                        },
                        tableBody: [
                            {
                                td: {
                                    0: 'A1.2.3 Examine documented procedures and interview personnel to verify that the provider has a mechanism for reporting and addressing suspected or confirmed security incidents and vulnerabilities, in accordance with all elements specified in this requirement.',
                                    1: 'Identify the evidence reference number(s) from Section 6 for the documented procedures examined for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_2_3_documentedProcedures',
                                },
                                rowspan: 2,
                            },
                            {
                                td: {
                                    0: 'Identify the evidence reference number(s) from Section 6 for all interviews conducted for this testing procedure.',
                                    name: 'evidenceReferenceNumber_A1_2_3_interviews',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
};
