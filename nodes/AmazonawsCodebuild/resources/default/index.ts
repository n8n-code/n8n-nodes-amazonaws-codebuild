import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Batch Delete Builds",
					"value": "Batch Delete Builds",
					"action": "Batch Delete Builds",
					"description": "Deletes one or more builds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds"
						}
					}
				},
				{
					"name": "Batch Get Build Batches",
					"value": "Batch Get Build Batches",
					"action": "Batch Get Build Batches",
					"description": "Retrieves information about one or more batch builds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches"
						}
					}
				},
				{
					"name": "Batch Get Builds",
					"value": "Batch Get Builds",
					"action": "Batch Get Builds",
					"description": "Gets information about one or more builds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds"
						}
					}
				},
				{
					"name": "Batch Get Projects",
					"value": "Batch Get Projects",
					"action": "Batch Get Projects",
					"description": "Gets information about one or more build projects.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects"
						}
					}
				},
				{
					"name": "Batch Get Report Groups",
					"value": "Batch Get Report Groups",
					"action": "Batch Get Report Groups",
					"description": " Returns an array of report groups. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups"
						}
					}
				},
				{
					"name": "Batch Get Reports",
					"value": "Batch Get Reports",
					"action": "Batch Get Reports",
					"description": " Returns an array of reports. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.BatchGetReports"
						}
					}
				},
				{
					"name": "Create Project",
					"value": "Create Project",
					"action": "Create Project",
					"description": "Creates a build project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.CreateProject"
						}
					}
				},
				{
					"name": "Create Report Group",
					"value": "Create Report Group",
					"action": "Create Report Group",
					"description": " Creates a report group. A report group contains a collection of reports. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup"
						}
					}
				},
				{
					"name": "Create Webhook",
					"value": "Create Webhook",
					"action": "Create Webhook",
					"description": "<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console\">Change a Build Project's Settings</a>.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.CreateWebhook"
						}
					}
				},
				{
					"name": "Delete Build Batch",
					"value": "Delete Build Batch",
					"action": "Delete Build Batch",
					"description": "Deletes a batch build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch"
						}
					}
				},
				{
					"name": "Delete Project",
					"value": "Delete Project",
					"action": "Delete Project",
					"description": " Deletes a build project. When you delete a project, its builds are not deleted. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteProject"
						}
					}
				},
				{
					"name": "Delete Report",
					"value": "Delete Report",
					"action": "Delete Report",
					"description": " Deletes a report. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteReport"
						}
					}
				},
				{
					"name": "Delete Report Group",
					"value": "Delete Report Group",
					"action": "Delete Report Group",
					"description": "Deletes a report group. Before you delete a report group, you must delete its reports. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup"
						}
					}
				},
				{
					"name": "Delete Resource Policy",
					"value": "Delete Resource Policy",
					"action": "Delete Resource Policy",
					"description": " Deletes a resource policy that is identified by its resource ARN. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy"
						}
					}
				},
				{
					"name": "Delete Source Credentials",
					"value": "Delete Source Credentials",
					"action": "Delete Source Credentials",
					"description": " Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials"
						}
					}
				},
				{
					"name": "Delete Webhook",
					"value": "Delete Webhook",
					"action": "Delete Webhook",
					"description": "For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook"
						}
					}
				},
				{
					"name": "Describe Code Coverages",
					"value": "Describe Code Coverages",
					"action": "Describe Code Coverages",
					"description": "Retrieves one or more code coverage reports.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages"
						}
					}
				},
				{
					"name": "Describe Test Cases",
					"value": "Describe Test Cases",
					"action": "Describe Test Cases",
					"description": " Returns a list of details about test cases for a report. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases"
						}
					}
				},
				{
					"name": "Get Report Group Trend",
					"value": "Get Report Group Trend",
					"action": "Get Report Group Trend",
					"description": "Analyzes and accumulates test report values for the specified test reports.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend"
						}
					}
				},
				{
					"name": "Get Resource Policy",
					"value": "Get Resource Policy",
					"action": "Get Resource Policy",
					"description": " Gets a resource policy that is identified by its resource ARN. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy"
						}
					}
				},
				{
					"name": "Import Source Credentials",
					"value": "Import Source Credentials",
					"action": "Import Source Credentials",
					"description": " Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials"
						}
					}
				},
				{
					"name": "Invalidate Project Cache",
					"value": "Invalidate Project Cache",
					"action": "Invalidate Project Cache",
					"description": "Resets the cache for a project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache"
						}
					}
				},
				{
					"name": "List Build Batches",
					"value": "List Build Batches",
					"action": "List Build Batches",
					"description": "Retrieves the identifiers of your build batches in the current region.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches"
						}
					}
				},
				{
					"name": "List Build Batches For Project",
					"value": "List Build Batches For Project",
					"action": "List Build Batches For Project",
					"description": "Retrieves the identifiers of the build batches for a specific project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject"
						}
					}
				},
				{
					"name": "List Builds",
					"value": "List Builds",
					"action": "List Builds",
					"description": "Gets a list of build IDs, with each build ID representing a single build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListBuilds"
						}
					}
				},
				{
					"name": "List Builds For Project",
					"value": "List Builds For Project",
					"action": "List Builds For Project",
					"description": "Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject"
						}
					}
				},
				{
					"name": "List Curated Environment Images",
					"value": "List Curated Environment Images",
					"action": "List Curated Environment Images",
					"description": "Gets information about Docker images that are managed by CodeBuild.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages"
						}
					}
				},
				{
					"name": "List Projects",
					"value": "List Projects",
					"action": "List Projects",
					"description": "Gets a list of build project names, with each build project name representing a single build project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListProjects"
						}
					}
				},
				{
					"name": "List Report Groups",
					"value": "List Report Groups",
					"action": "List Report Groups",
					"description": " Gets a list ARNs for the report groups in the current Amazon Web Services account. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListReportGroups"
						}
					}
				},
				{
					"name": "List Reports",
					"value": "List Reports",
					"action": "List Reports",
					"description": " Returns a list of ARNs for the reports in the current Amazon Web Services account. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListReports"
						}
					}
				},
				{
					"name": "List Reports For Report Group",
					"value": "List Reports For Report Group",
					"action": "List Reports For Report Group",
					"description": " Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup"
						}
					}
				},
				{
					"name": "List Shared Projects",
					"value": "List Shared Projects",
					"action": "List Shared Projects",
					"description": " Gets a list of projects that are shared with other Amazon Web Services accounts or users. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects"
						}
					}
				},
				{
					"name": "List Shared Report Groups",
					"value": "List Shared Report Groups",
					"action": "List Shared Report Groups",
					"description": " Gets a list of report groups that are shared with other Amazon Web Services accounts or users. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups"
						}
					}
				},
				{
					"name": "List Source Credentials",
					"value": "List Source Credentials",
					"action": "List Source Credentials",
					"description": " Returns a list of <code>SourceCredentialsInfo</code> objects. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials"
						}
					}
				},
				{
					"name": "Put Resource Policy",
					"value": "Put Resource Policy",
					"action": "Put Resource Policy",
					"description": " Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy"
						}
					}
				},
				{
					"name": "Retry Build",
					"value": "Retry Build",
					"action": "Retry Build",
					"description": "Restarts a build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.RetryBuild"
						}
					}
				},
				{
					"name": "Retry Build Batch",
					"value": "Retry Build Batch",
					"action": "Retry Build Batch",
					"description": "Restarts a failed batch build. Only batch builds that have failed can be retried.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch"
						}
					}
				},
				{
					"name": "Start Build",
					"value": "Start Build",
					"action": "Start Build",
					"description": "Starts running a build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.StartBuild"
						}
					}
				},
				{
					"name": "Start Build Batch",
					"value": "Start Build Batch",
					"action": "Start Build Batch",
					"description": "Starts a batch build for a project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch"
						}
					}
				},
				{
					"name": "Stop Build",
					"value": "Stop Build",
					"action": "Stop Build",
					"description": "Attempts to stop running a build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.StopBuild"
						}
					}
				},
				{
					"name": "Stop Build Batch",
					"value": "Stop Build Batch",
					"action": "Stop Build Batch",
					"description": "Stops a running batch build.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch"
						}
					}
				},
				{
					"name": "Update Project",
					"value": "Update Project",
					"action": "Update Project",
					"description": "Changes the settings of a build project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.UpdateProject"
						}
					}
				},
				{
					"name": "Update Project Visibility",
					"value": "Update Project Visibility",
					"action": "Update Project Visibility",
					"description": "<p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html\">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices\">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility"
						}
					}
				},
				{
					"name": "Update Report Group",
					"value": "Update Report Group",
					"action": "Update Report Group",
					"description": " Updates a report group. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup"
						}
					}
				},
				{
					"name": "Update Webhook",
					"value": "Update Webhook",
					"action": "Update Webhook",
					"description": "<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Builds"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchDeleteBuilds",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Delete Builds",
					"value": "CodeBuild_20161006.BatchDeleteBuilds"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Builds"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The IDs of the builds to delete.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Builds"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Builds"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Build Batches"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchGetBuildBatches",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Get Build Batches",
					"value": "CodeBuild_20161006.BatchGetBuildBatches"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Build Batches"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array that contains the batch build identifiers to retrieve.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Build Batches"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Builds"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchGetBuilds",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Get Builds",
					"value": "CodeBuild_20161006.BatchGetBuilds"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Builds"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The IDs of the builds.",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Builds"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Builds"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchGetProjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Projects"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchGetProjects",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Get Projects",
					"value": "CodeBuild_20161006.BatchGetProjects"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Projects"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Names",
			"name": "names",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The names or ARNs of the build projects. To get information about a project shared with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project using its name.",
			"routing": {
				"send": {
					"property": "names",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Projects"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Report Groups"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchGetReportGroups",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Get Report Groups",
					"value": "CodeBuild_20161006.BatchGetReportGroups"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Report Groups"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Group Arns",
			"name": "reportGroupArns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " An array of report group ARNs that identify the report groups to return. ",
			"routing": {
				"send": {
					"property": "reportGroupArns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Report Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.BatchGetReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Reports"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.BatchGetReports",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Batch Get Reports",
					"value": "CodeBuild_20161006.BatchGetReports"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Reports"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Arns",
			"name": "reportArns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " An array of ARNs that identify the <code>Report</code> objects to return. ",
			"routing": {
				"send": {
					"property": "reportArns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Reports"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Get Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.CreateProject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.CreateProject",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Create Project",
					"value": "CodeBuild_20161006.CreateProject"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the build project.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A description that makes the build project easy to identify.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "source",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"gitCloneDepth\": {},\n  \"gitSubmodulesConfig\": {},\n  \"buildspec\": {},\n  \"auth\": {},\n  \"reportBuildStatus\": {},\n  \"buildStatusConfig\": {},\n  \"insecureSsl\": {},\n  \"sourceIdentifier\": {}\n}",
			"description": "Information about the build input source code for the build project.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources",
			"name": "secondarySources",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"gitCloneDepth\": {},\n    \"gitSubmodulesConfig\": {},\n    \"buildspec\": {},\n    \"auth\": {},\n    \"reportBuildStatus\": {},\n    \"buildStatusConfig\": {},\n    \"insecureSsl\": {},\n    \"sourceIdentifier\": {}\n  }\n]",
			"description": "An array of <code>ProjectSource</code> objects. ",
			"routing": {
				"send": {
					"property": "secondarySources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Source Version",
			"name": "sourceVersion",
			"type": "string",
			"default": "",
			"description": "<p>A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p>If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
			"routing": {
				"send": {
					"property": "sourceVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Source Versions",
			"name": "secondarySourceVersions",
			"type": "json",
			"default": "[\n  {\n    \"sourceVersion\": {}\n  }\n]",
			"description": "An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take precedence over these <code>secondarySourceVersions</code> (at the project level). ",
			"routing": {
				"send": {
					"property": "secondarySourceVersions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Artifacts",
			"name": "artifacts",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"path\": {},\n  \"namespaceType\": {},\n  \"name\": {},\n  \"packaging\": {},\n  \"overrideArtifactName\": {},\n  \"encryptionDisabled\": {},\n  \"artifactIdentifier\": {}\n}",
			"description": "Information about the build output artifacts for the build project.",
			"routing": {
				"send": {
					"property": "artifacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Artifacts",
			"name": "secondaryArtifacts",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"path\": {},\n    \"namespaceType\": {},\n    \"name\": {},\n    \"packaging\": {},\n    \"overrideArtifactName\": {},\n    \"encryptionDisabled\": {},\n    \"artifactIdentifier\": {}\n  }\n]",
			"description": "An array of <code>ProjectArtifacts</code> objects. ",
			"routing": {
				"send": {
					"property": "secondaryArtifacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Cache",
			"name": "cache",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"modes\": {}\n}",
			"description": "Stores recently used information so that it can be quickly accessed at a later time.",
			"routing": {
				"send": {
					"property": "cache",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Environment",
			"name": "environment",
			"type": "json",
			"default": "{\n  \"image\": {},\n  \"computeType\": {},\n  \"environmentVariables\": {},\n  \"privilegedMode\": {},\n  \"certificate\": {},\n  \"registryCredential\": {},\n  \"imagePullCredentialsType\": {}\n}",
			"description": "Information about the build environment for the build project.",
			"routing": {
				"send": {
					"property": "environment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Role",
			"name": "serviceRole",
			"type": "string",
			"default": "",
			"description": "The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.",
			"routing": {
				"send": {
					"property": "serviceRole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Timeout In Minutes",
			"name": "timeoutInMinutes",
			"type": "number",
			"default": 0,
			"description": "How long, in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.",
			"routing": {
				"send": {
					"property": "timeoutInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Queued Timeout In Minutes",
			"name": "queuedTimeoutInMinutes",
			"type": "number",
			"default": 0,
			"description": "The number of minutes a build is allowed to be queued before it times out. ",
			"routing": {
				"send": {
					"property": "queuedTimeoutInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key",
			"name": "encryptionKey",
			"type": "string",
			"default": "",
			"description": "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>). </p>",
			"routing": {
				"send": {
					"property": "encryptionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "<p>A list of tag key and value pairs associated with this build project.</p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.</p>",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "vpcConfig",
			"type": "json",
			"default": "{\n  \"subnets\": {},\n  \"securityGroupIds\": {}\n}",
			"description": "VpcConfig enables CodeBuild to access resources in an Amazon VPC.",
			"routing": {
				"send": {
					"property": "vpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Badge Enabled",
			"name": "badgeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Set this to true to generate a publicly accessible URL for your project's build badge.",
			"routing": {
				"send": {
					"property": "badgeEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Logs Config",
			"name": "logsConfig",
			"type": "json",
			"default": "{\n  \"cloudWatchLogs\": {\n    \"status\": {},\n    \"groupName\": {},\n    \"streamName\": {}\n  },\n  \"s3Logs\": {}\n}",
			"description": "Information about logs for the build project. These can be logs in CloudWatch Logs, logs uploaded to a specified S3 bucket, or both. ",
			"routing": {
				"send": {
					"property": "logsConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "File System Locations",
			"name": "fileSystemLocations",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"mountPoint\": {},\n    \"identifier\": {},\n    \"mountOptions\": {}\n  }\n]",
			"description": " An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ",
			"routing": {
				"send": {
					"property": "fileSystemLocations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Build Batch Config",
			"name": "buildBatchConfig",
			"type": "json",
			"default": "{\n  \"combineArtifacts\": {},\n  \"restrictions\": {},\n  \"timeoutInMins\": {},\n  \"batchReportMode\": {}\n}",
			"description": "A <a>ProjectBuildBatchConfig</a> object that defines the batch build options for the project.",
			"routing": {
				"send": {
					"property": "buildBatchConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Concurrent Build Limit",
			"name": "concurrentBuildLimit",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of concurrent builds that are allowed for this project.</p> <p>New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.</p>",
			"routing": {
				"send": {
					"property": "concurrentBuildLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.CreateReportGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.CreateReportGroup",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Create Report Group",
					"value": "CodeBuild_20161006.CreateReportGroup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": " The name of the report group. ",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "TEST",
			"description": " The type of report group. ",
			"options": [
				{
					"name": "TEST",
					"value": "TEST"
				},
				{
					"name": "CODE COVERAGE",
					"value": "CODE_COVERAGE"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Export Config",
			"name": "exportConfig",
			"type": "json",
			"default": "{\n  \"s3Destination\": {}\n}",
			"description": " A <code>ReportExportConfig</code> object that contains information about where the report group test results are exported. ",
			"routing": {
				"send": {
					"property": "exportConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "<p> A list of tag key and value pairs associated with this report group. </p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.</p>",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Group"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.CreateWebhook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.CreateWebhook",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Create Webhook",
					"value": "CodeBuild_20161006.CreateWebhook"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Branch Filter",
			"name": "branchFilter",
			"type": "string",
			"default": "",
			"description": "<p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p>It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>",
			"routing": {
				"send": {
					"property": "branchFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Filter Groups",
			"name": "filterGroups",
			"type": "json",
			"default": "[\n  [\n    {\n      \"pattern\": {},\n      \"excludeMatchedPattern\": {}\n    }\n  ]\n]",
			"description": "<p>An array of arrays of <code>WebhookFilter</code> objects used to determine which webhooks are triggered. At least one <code>WebhookFilter</code> in the array must specify <code>EVENT</code> as its <code>type</code>. </p> <p>For a build to be triggered, at least one filter group in the <code>filterGroups</code> array must pass. For a filter group to pass, each of its filters must pass. </p>",
			"routing": {
				"send": {
					"property": "filterGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Build Type",
			"name": "buildType",
			"type": "options",
			"default": "BUILD",
			"description": "Specifies the type of build this webhook will trigger.",
			"options": [
				{
					"name": "BUILD",
					"value": "BUILD"
				},
				{
					"name": "BUILD BATCH",
					"value": "BUILD_BATCH"
				}
			],
			"routing": {
				"send": {
					"property": "buildType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Build Batch"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteBuildBatch",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Build Batch",
					"value": "CodeBuild_20161006.DeleteBuildBatch"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Build Batch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The identifier of the batch build to delete.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Build Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteProject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteProject",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Project",
					"value": "CodeBuild_20161006.DeleteProject"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the build project.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteReport",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Report",
					"value": "CodeBuild_20161006.DeleteReport"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Arn",
			"name": "arn",
			"type": "string",
			"default": "",
			"description": " The ARN of the report to delete. ",
			"routing": {
				"send": {
					"property": "arn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Group"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteReportGroup",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Report Group",
					"value": "CodeBuild_20161006.DeleteReportGroup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Arn",
			"name": "arn",
			"type": "string",
			"default": "",
			"description": "The ARN of the report group to delete. ",
			"routing": {
				"send": {
					"property": "arn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Group"
					]
				}
			}
		},
		{
			"displayName": "Delete Reports",
			"name": "deleteReports",
			"type": "boolean",
			"default": true,
			"description": "<p>If <code>true</code>, deletes any reports that belong to a report group before deleting the report group. </p> <p>If <code>false</code>, you must delete any reports in the report group. Use <a href=\"https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html\">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href=\"https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html\">DeleteReport</a> to delete the reports. If you call <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown. </p>",
			"routing": {
				"send": {
					"property": "deleteReports",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Group"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Resource Policy",
					"value": "CodeBuild_20161006.DeleteResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the resource that is associated with the resource policy. ",
			"routing": {
				"send": {
					"property": "resourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteSourceCredentials",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Source Credentials",
					"value": "CodeBuild_20161006.DeleteSourceCredentials"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Source Credentials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Arn",
			"name": "arn",
			"type": "string",
			"default": "",
			"description": " The Amazon Resource Name (ARN) of the token.",
			"routing": {
				"send": {
					"property": "arn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DeleteWebhook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DeleteWebhook",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Delete Webhook",
					"value": "CodeBuild_20161006.DeleteWebhook"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DescribeCodeCoverages",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Describe Code Coverages",
					"value": "CodeBuild_20161006.DescribeCodeCoverages"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Arn",
			"name": "reportArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the report for which test cases are returned. ",
			"routing": {
				"send": {
					"property": "reportArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "The <code>nextToken</code> value returned from a previous call to <code>DescribeCodeCoverages</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "Specifies if the results are sorted in ascending or descending order.",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "options",
			"default": "LINE_COVERAGE_PERCENTAGE",
			"description": "<p>Specifies how the results are sorted. Possible values are:</p> <dl> <dt>FILE_PATH</dt> <dd> <p>The results are sorted by file path.</p> </dd> <dt>LINE_COVERAGE_PERCENTAGE</dt> <dd> <p>The results are sorted by the percentage of lines that are covered.</p> </dd> </dl>",
			"options": [
				{
					"name": "LINE COVERAGE PERCENTAGE",
					"value": "LINE_COVERAGE_PERCENTAGE"
				},
				{
					"name": "FILE PATH",
					"value": "FILE_PATH"
				}
			],
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Min Line Coverage Percentage",
			"name": "minLineCoveragePercentage",
			"type": "number",
			"default": 0,
			"description": "The minimum line coverage percentage to report.",
			"routing": {
				"send": {
					"property": "minLineCoveragePercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Max Line Coverage Percentage",
			"name": "maxLineCoveragePercentage",
			"type": "number",
			"default": 0,
			"description": "The maximum line coverage percentage to report.",
			"routing": {
				"send": {
					"property": "maxLineCoveragePercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Code Coverages"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.DescribeTestCases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.DescribeTestCases",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Describe Test Cases",
					"value": "CodeBuild_20161006.DescribeTestCases"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Arn",
			"name": "reportArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the report for which test cases are returned. ",
			"routing": {
				"send": {
					"property": "reportArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated test cases returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>TestCase</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "json",
			"default": "{\n  \"keyword\": {}\n}",
			"description": " A <code>TestCaseFilter</code> object used to filter the returned reports. ",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Test Cases"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.GetReportGroupTrend",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Get Report Group Trend",
					"value": "CodeBuild_20161006.GetReportGroupTrend"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Group Arn",
			"name": "reportGroupArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the report group that contains the reports to analyze.",
			"routing": {
				"send": {
					"property": "reportGroupArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"displayName": "Num Of Reports",
			"name": "numOfReports",
			"type": "number",
			"default": 0,
			"description": "<p>The number of reports to analyze. This operation always retrieves the most recent reports.</p> <p>If this parameter is omitted, the most recent 100 reports are analyzed.</p>",
			"routing": {
				"send": {
					"property": "numOfReports",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trend Field",
			"name": "trendField",
			"type": "options",
			"default": "PASS_RATE",
			"description": "<p>The test report value to accumulate. This must be one of the following values:</p> <dl> <dt>Test reports:</dt> <dd> <dl> <dt>DURATION</dt> <dd> <p>Accumulate the test run times for the specified reports.</p> </dd> <dt>PASS_RATE</dt> <dd> <p>Accumulate the percentage of tests that passed for the specified test reports.</p> </dd> <dt>TOTAL</dt> <dd> <p>Accumulate the total number of tests for the specified test reports.</p> </dd> </dl> </dd> </dl> <dl> <dt>Code coverage reports:</dt> <dd> <dl> <dt>BRANCH_COVERAGE</dt> <dd> <p>Accumulate the branch coverage percentages for the specified test reports.</p> </dd> <dt>BRANCHES_COVERED</dt> <dd> <p>Accumulate the branches covered values for the specified test reports.</p> </dd> <dt>BRANCHES_MISSED</dt> <dd> <p>Accumulate the branches missed values for the specified test reports.</p> </dd> <dt>LINE_COVERAGE</dt> <dd> <p>Accumulate the line coverage percentages for the specified test reports.</p> </dd> <dt>LINES_COVERED</dt> <dd> <p>Accumulate the lines covered values for the specified test reports.</p> </dd> <dt>LINES_MISSED</dt> <dd> <p>Accumulate the lines not covered values for the specified test reports.</p> </dd> </dl> </dd> </dl>",
			"options": [
				{
					"name": "PASS RATE",
					"value": "PASS_RATE"
				},
				{
					"name": "DURATION",
					"value": "DURATION"
				},
				{
					"name": "TOTAL",
					"value": "TOTAL"
				},
				{
					"name": "LINE COVERAGE",
					"value": "LINE_COVERAGE"
				},
				{
					"name": "LINES COVERED",
					"value": "LINES_COVERED"
				},
				{
					"name": "LINES MISSED",
					"value": "LINES_MISSED"
				},
				{
					"name": "BRANCH COVERAGE",
					"value": "BRANCH_COVERAGE"
				},
				{
					"name": "BRANCHES COVERED",
					"value": "BRANCHES_COVERED"
				},
				{
					"name": "BRANCHES MISSED",
					"value": "BRANCHES_MISSED"
				}
			],
			"routing": {
				"send": {
					"property": "trendField",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Report Group Trend"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.GetResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Get Resource Policy",
					"value": "CodeBuild_20161006.GetResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the resource that is associated with the resource policy. ",
			"routing": {
				"send": {
					"property": "resourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ImportSourceCredentials",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Import Source Credentials",
					"value": "CodeBuild_20161006.ImportSourceCredentials"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": " The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter is not valid for other types of source providers or connections. ",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"description": " For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password. ",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Server Type",
			"name": "serverType",
			"type": "options",
			"default": "GITHUB",
			"description": " The source provider used for this project. ",
			"options": [
				{
					"name": "GITHUB",
					"value": "GITHUB"
				},
				{
					"name": "BITBUCKET",
					"value": "BITBUCKET"
				},
				{
					"name": "GITHUB ENTERPRISE",
					"value": "GITHUB_ENTERPRISE"
				}
			],
			"routing": {
				"send": {
					"property": "serverType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Auth Type",
			"name": "authType",
			"type": "options",
			"default": "OAUTH",
			"description": " The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console. ",
			"options": [
				{
					"name": "OAUTH",
					"value": "OAUTH"
				},
				{
					"name": "BASIC AUTH",
					"value": "BASIC_AUTH"
				},
				{
					"name": "PERSONAL ACCESS TOKEN",
					"value": "PERSONAL_ACCESS_TOKEN"
				}
			],
			"routing": {
				"send": {
					"property": "authType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "Should Overwrite",
			"name": "shouldOverwrite",
			"type": "boolean",
			"default": true,
			"description": " Set to <code>false</code> to prevent overwriting the repository source credentials. Set to <code>true</code> to overwrite the repository source credentials. The default value is <code>true</code>. ",
			"routing": {
				"send": {
					"property": "shouldOverwrite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invalidate Project Cache"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.InvalidateProjectCache",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Invalidate Project Cache",
					"value": "CodeBuild_20161006.InvalidateProjectCache"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invalidate Project Cache"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild build project that the cache is reset for.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invalidate Project Cache"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invalidate Project Cache"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListBuildBatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListBuildBatches",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Build Batches",
					"value": "CodeBuild_20161006.ListBuildBatches"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "json",
			"default": "{}",
			"description": "A <code>BuildBatchFilter</code> object that specifies the filters for the search.",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>Specifies the sort order of the returned items. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the batch build identifiers in ascending order by identifier.</p> </li> <li> <p> <code>DESCENDING</code>: List the batch build identifiers in descending order by identifier.</p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "The <code>nextToken</code> value returned from a previous call to <code>ListBuildBatches</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListBuildBatchesForProject",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Build Batches For Project",
					"value": "CodeBuild_20161006.ListBuildBatchesForProject"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "json",
			"default": "{}",
			"description": "A <code>BuildBatchFilter</code> object that specifies the filters for the search.",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>Specifies the sort order of the returned items. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the batch build identifiers in ascending order by identifier.</p> </li> <li> <p> <code>DESCENDING</code>: List the batch build identifiers in descending order by identifier.</p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "The <code>nextToken</code> value returned from a previous call to <code>ListBuildBatchesForProject</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Build Batches For Project"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListBuilds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListBuilds",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Builds",
					"value": "CodeBuild_20161006.ListBuilds"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>The order to list build IDs. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build IDs in ascending order by build ID.</p> </li> <li> <p> <code>DESCENDING</code>: List the build IDs in descending order by build ID.</p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListBuildsForProject",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Builds For Project",
					"value": "CodeBuild_20161006.ListBuildsForProject"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order.</p> <p>Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build identifiers in ascending order, by build number.</p> </li> <li> <p> <code>DESCENDING</code>: List the build identifiers in descending order, by build number.</p> </li> </ul> <p>If the project has more than 100 builds, setting the sort order will result in an error. </p>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Builds For Project"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Curated Environment Images"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListCuratedEnvironmentImages",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Curated Environment Images",
					"value": "CodeBuild_20161006.ListCuratedEnvironmentImages"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Curated Environment Images"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Curated Environment Images"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListProjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListProjects",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Projects",
					"value": "CodeBuild_20161006.ListProjects"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "options",
			"default": "NAME",
			"description": "<p>The criterion to be used to list build project names. Valid values include:</p> <ul> <li> <p> <code>CREATED_TIME</code>: List based on when each build project was created.</p> </li> <li> <p> <code>LAST_MODIFIED_TIME</code>: List based on when information about each build project was last changed.</p> </li> <li> <p> <code>NAME</code>: List based on each build project's name.</p> </li> </ul> <p>Use <code>sortOrder</code> to specify in what order to list the build project names based on the preceding criteria.</p>",
			"options": [
				{
					"name": "NAME",
					"value": "NAME"
				},
				{
					"name": "CREATED TIME",
					"value": "CREATED_TIME"
				},
				{
					"name": "LAST MODIFIED TIME",
					"value": "LAST_MODIFIED_TIME"
				}
			],
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>The order in which to list build projects. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul> <p>Use <code>sortBy</code> to specify the criterion to be used to list build project names.</p>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListReportGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListReportGroups",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Report Groups",
					"value": "CodeBuild_20161006.ListReportGroups"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": " Used to specify the order to sort the list of returned report groups. Valid values are <code>ASCENDING</code> and <code>DESCENDING</code>. ",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "options",
			"default": "NAME",
			"description": "<p> The criterion to be used to list build report groups. Valid values include: </p> <ul> <li> <p> <code>CREATED_TIME</code>: List based on when each report group was created.</p> </li> <li> <p> <code>LAST_MODIFIED_TIME</code>: List based on when each report group was last changed.</p> </li> <li> <p> <code>NAME</code>: List based on each report group's name.</p> </li> </ul>",
			"options": [
				{
					"name": "NAME",
					"value": "NAME"
				},
				{
					"name": "CREATED TIME",
					"value": "CREATED_TIME"
				},
				{
					"name": "LAST MODIFIED TIME",
					"value": "LAST_MODIFIED_TIME"
				}
			],
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated report groups returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>ReportGroup</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListReports",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Reports",
					"value": "CodeBuild_20161006.ListReports"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p> Specifies the sort order for the list of returned reports. Valid values are: </p> <ul> <li> <p> <code>ASCENDING</code>: return reports in chronological order based on their creation date. </p> </li> <li> <p> <code>DESCENDING</code>: return reports in the reverse chronological order based on their creation date. </p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated reports returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Report</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "json",
			"default": "{}",
			"description": " A <code>ReportFilter</code> object used to filter the returned reports. ",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListReportsForReportGroup",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Reports For Report Group",
					"value": "CodeBuild_20161006.ListReportsForReportGroup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Group Arn",
			"name": "reportGroupArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the report group for which you want to return report ARNs. ",
			"routing": {
				"send": {
					"property": "reportGroupArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": " Use to specify whether the results are returned in ascending or descending order. ",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated reports in this report group returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Report</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "json",
			"default": "{}",
			"description": " A <code>ReportFilter</code> object used to filter the returned reports. ",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Reports For Report Group"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListSharedProjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListSharedProjects",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Shared Projects",
					"value": "CodeBuild_20161006.ListSharedProjects"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "options",
			"default": "ARN",
			"description": "<p> The criterion to be used to list build projects shared with the current Amazon Web Services account or user. Valid values include: </p> <ul> <li> <p> <code>ARN</code>: List based on the ARN. </p> </li> <li> <p> <code>MODIFIED_TIME</code>: List based on when information about the shared project was last changed. </p> </li> </ul>",
			"options": [
				{
					"name": "ARN",
					"value": "ARN"
				},
				{
					"name": "MODIFIED TIME",
					"value": "MODIFIED_TIME"
				}
			],
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>The order in which to list shared build projects. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated shared build projects returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Project</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListSharedReportGroups",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Shared Report Groups",
					"value": "CodeBuild_20161006.ListSharedReportGroups"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sortOrder",
			"type": "options",
			"default": "ASCENDING",
			"description": "<p>The order in which to list shared report groups. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul>",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"property": "sortOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "options",
			"default": "ARN",
			"description": "<p> The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include: </p> <ul> <li> <p> <code>ARN</code>: List based on the ARN. </p> </li> <li> <p> <code>MODIFIED_TIME</code>: List based on when information about the shared report group was last changed. </p> </li> </ul>",
			"options": [
				{
					"name": "ARN",
					"value": "ARN"
				},
				{
					"name": "MODIFIED TIME",
					"value": "MODIFIED_TIME"
				}
			],
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of paginated shared report groups per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>ReportGroup</code> objects. The default value is 100. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Shared Report Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.ListSourceCredentials",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 List Source Credentials",
					"value": "CodeBuild_20161006.ListSourceCredentials"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Source Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.PutResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Put Resource Policy",
					"value": "CodeBuild_20161006.PutResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Policy",
			"name": "policy",
			"type": "string",
			"default": "",
			"description": " A JSON-formatted resource policy. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share\">Sharing a Project</a> and <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share\">Sharing a Report Group</a> in the <i>CodeBuild User Guide</i>. ",
			"routing": {
				"send": {
					"property": "policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"type": "string",
			"default": "",
			"description": " The ARN of the <code>Project</code> or <code>ReportGroup</code> resource you want to associate with a resource policy. ",
			"routing": {
				"send": {
					"property": "resourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.RetryBuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.RetryBuild",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Retry Build",
					"value": "CodeBuild_20161006.RetryBuild"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Specifies the identifier of the build to restart.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build Batch"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.RetryBuildBatch",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Retry Build Batch",
					"value": "CodeBuild_20161006.RetryBuildBatch"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build Batch"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Specifies the identifier of the batch build to restart.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Retry Type",
			"name": "retryType",
			"type": "options",
			"default": "RETRY_ALL_BUILDS",
			"description": "Specifies the type of retry to perform.",
			"options": [
				{
					"name": "RETRY ALL BUILDS",
					"value": "RETRY_ALL_BUILDS"
				},
				{
					"name": "RETRY FAILED BUILDS",
					"value": "RETRY_FAILED_BUILDS"
				}
			],
			"routing": {
				"send": {
					"property": "retryType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retry Build Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.StartBuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.StartBuild",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Start Build",
					"value": "CodeBuild_20161006.StartBuild"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild build project to start running a build.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources Override",
			"name": "secondarySourcesOverride",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"gitCloneDepth\": {},\n    \"gitSubmodulesConfig\": {},\n    \"buildspec\": {},\n    \"auth\": {},\n    \"reportBuildStatus\": {},\n    \"buildStatusConfig\": {},\n    \"insecureSsl\": {},\n    \"sourceIdentifier\": {}\n  }\n]",
			"description": " An array of <code>ProjectSource</code> objects. ",
			"routing": {
				"send": {
					"property": "secondarySourcesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources Version Override",
			"name": "secondarySourcesVersionOverride",
			"type": "json",
			"default": "[\n  {\n    \"sourceVersion\": {}\n  }\n]",
			"description": " An array of <code>ProjectSourceVersion</code> objects that specify one or more versions of the project's secondary sources to be used for this build only. ",
			"routing": {
				"send": {
					"property": "secondarySourcesVersionOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Source Version",
			"name": "sourceVersion",
			"type": "string",
			"default": "",
			"description": "<p>The version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:</p> <dl> <dt>CodeCommit</dt> <dd> <p>The commit ID, branch, or Git tag to use.</p> </dd> <dt>GitHub</dt> <dd> <p>The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Bitbucket</dt> <dd> <p>The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Amazon S3</dt> <dd> <p>The version ID of the object that represents the build input ZIP file to use.</p> </dd> </dl> <p>If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
			"routing": {
				"send": {
					"property": "sourceVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Artifacts Override",
			"name": "artifactsOverride",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"path\": {},\n  \"namespaceType\": {},\n  \"name\": {},\n  \"packaging\": {},\n  \"overrideArtifactName\": {},\n  \"encryptionDisabled\": {},\n  \"artifactIdentifier\": {}\n}",
			"description": "Build output artifact settings that override, for this build only, the latest ones already defined in the build project.",
			"routing": {
				"send": {
					"property": "artifactsOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Secondary Artifacts Override",
			"name": "secondaryArtifactsOverride",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"path\": {},\n    \"namespaceType\": {},\n    \"name\": {},\n    \"packaging\": {},\n    \"overrideArtifactName\": {},\n    \"encryptionDisabled\": {},\n    \"artifactIdentifier\": {}\n  }\n]",
			"description": " An array of <code>ProjectArtifacts</code> objects. ",
			"routing": {
				"send": {
					"property": "secondaryArtifactsOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Environment Variables Override",
			"name": "environmentVariablesOverride",
			"type": "json",
			"default": "[\n  {\n    \"value\": {},\n    \"type\": {}\n  }\n]",
			"description": "A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.",
			"routing": {
				"send": {
					"property": "environmentVariablesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Source Type Override",
			"name": "sourceTypeOverride",
			"type": "options",
			"default": "CODECOMMIT",
			"description": "A source input type, for this build, that overrides the source input defined in the build project.",
			"options": [
				{
					"name": "CODECOMMIT",
					"value": "CODECOMMIT"
				},
				{
					"name": "CODEPIPELINE",
					"value": "CODEPIPELINE"
				},
				{
					"name": "GITHUB",
					"value": "GITHUB"
				},
				{
					"name": "S 3",
					"value": "S3"
				},
				{
					"name": "BITBUCKET",
					"value": "BITBUCKET"
				},
				{
					"name": "GITHUB ENTERPRISE",
					"value": "GITHUB_ENTERPRISE"
				},
				{
					"name": "NO SOURCE",
					"value": "NO_SOURCE"
				}
			],
			"routing": {
				"send": {
					"property": "sourceTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Source Location Override",
			"name": "sourceLocationOverride",
			"type": "string",
			"default": "",
			"description": "A location that overrides, for this build, the source location for the one defined in the build project.",
			"routing": {
				"send": {
					"property": "sourceLocationOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Source Auth Override",
			"name": "sourceAuthOverride",
			"type": "json",
			"default": "{\n  \"resource\": {}\n}",
			"description": "An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket or GitHub.",
			"routing": {
				"send": {
					"property": "sourceAuthOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Git Clone Depth Override",
			"name": "gitCloneDepthOverride",
			"type": "number",
			"default": 0,
			"description": "The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.",
			"routing": {
				"send": {
					"property": "gitCloneDepthOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Git Submodules Config Override",
			"name": "gitSubmodulesConfigOverride",
			"type": "json",
			"default": "{}",
			"description": " Information about the Git submodules configuration for this build of an CodeBuild build project. ",
			"routing": {
				"send": {
					"property": "gitSubmodulesConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Buildspec Override",
			"name": "buildspecOverride",
			"type": "string",
			"default": "",
			"description": "<p>A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project.</p> <p> If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage\">Buildspec File Name and Storage Location</a>. </p>",
			"routing": {
				"send": {
					"property": "buildspecOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Insecure SSL Override",
			"name": "insecureSslOverride",
			"type": "boolean",
			"default": true,
			"description": "Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.",
			"routing": {
				"send": {
					"property": "insecureSslOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Report Build Status Override",
			"name": "reportBuildStatusOverride",
			"type": "boolean",
			"default": true,
			"description": "<p> Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p> <p>To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html\">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p> <note> <p> The status of a build triggered by a webhook is always reported to your source provider. </p> </note>",
			"routing": {
				"send": {
					"property": "reportBuildStatusOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Build Status Config Override",
			"name": "buildStatusConfigOverride",
			"type": "json",
			"default": "{\n  \"targetUrl\": {}\n}",
			"description": "Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or <code>BITBUCKET</code>.",
			"routing": {
				"send": {
					"property": "buildStatusConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Environment Type Override",
			"name": "environmentTypeOverride",
			"type": "options",
			"default": "WINDOWS_CONTAINER",
			"description": "A container type for this build that overrides the one specified in the build project.",
			"options": [
				{
					"name": "WINDOWS CONTAINER",
					"value": "WINDOWS_CONTAINER"
				},
				{
					"name": "LINUX CONTAINER",
					"value": "LINUX_CONTAINER"
				},
				{
					"name": "LINUX GPU CONTAINER",
					"value": "LINUX_GPU_CONTAINER"
				},
				{
					"name": "ARM CONTAINER",
					"value": "ARM_CONTAINER"
				},
				{
					"name": "WINDOWS SERVER 2019 CONTAINER",
					"value": "WINDOWS_SERVER_2019_CONTAINER"
				}
			],
			"routing": {
				"send": {
					"property": "environmentTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Image Override",
			"name": "imageOverride",
			"type": "string",
			"default": "",
			"description": "The name of an image for this build that overrides the one specified in the build project.",
			"routing": {
				"send": {
					"property": "imageOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Compute Type Override",
			"name": "computeTypeOverride",
			"type": "options",
			"default": "BUILD_GENERAL1_SMALL",
			"description": "The name of a compute type for this build that overrides the one specified in the build project.",
			"options": [
				{
					"name": "BUILD GENERAL 1 SMALL",
					"value": "BUILD_GENERAL1_SMALL"
				},
				{
					"name": "BUILD GENERAL 1 MEDIUM",
					"value": "BUILD_GENERAL1_MEDIUM"
				},
				{
					"name": "BUILD GENERAL 1 LARGE",
					"value": "BUILD_GENERAL1_LARGE"
				},
				{
					"name": "BUILD GENERAL 1 2 XLARGE",
					"value": "BUILD_GENERAL1_2XLARGE"
				}
			],
			"routing": {
				"send": {
					"property": "computeTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Certificate Override",
			"name": "certificateOverride",
			"type": "string",
			"default": "",
			"description": "The name of a certificate for this build that overrides the one specified in the build project.",
			"routing": {
				"send": {
					"property": "certificateOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Cache Override",
			"name": "cacheOverride",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"modes\": {}\n}",
			"description": "A ProjectCache object specified for this build that overrides the one defined in the build project.",
			"routing": {
				"send": {
					"property": "cacheOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Service Role Override",
			"name": "serviceRoleOverride",
			"type": "string",
			"default": "",
			"description": "The name of a service role for this build that overrides the one specified in the build project.",
			"routing": {
				"send": {
					"property": "serviceRoleOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Privileged Mode Override",
			"name": "privilegedModeOverride",
			"type": "boolean",
			"default": true,
			"description": "Enable this flag to override privileged mode in the build project.",
			"routing": {
				"send": {
					"property": "privilegedModeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Timeout In Minutes Override",
			"name": "timeoutInMinutesOverride",
			"type": "number",
			"default": 0,
			"description": "The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this build only, the latest setting already defined in the build project.",
			"routing": {
				"send": {
					"property": "timeoutInMinutesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Queued Timeout In Minutes Override",
			"name": "queuedTimeoutInMinutesOverride",
			"type": "number",
			"default": 0,
			"description": " The number of minutes a build is allowed to be queued before it times out. ",
			"routing": {
				"send": {
					"property": "queuedTimeoutInMinutesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key Override",
			"name": "encryptionKeyOverride",
			"type": "string",
			"default": "",
			"description": "<p>The Key Management Service customer master key (CMK) that overrides the one specified in the build project. The CMK key encrypts the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
			"routing": {
				"send": {
					"property": "encryptionKeyOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Logs Config Override",
			"name": "logsConfigOverride",
			"type": "json",
			"default": "{\n  \"cloudWatchLogs\": {\n    \"status\": {},\n    \"groupName\": {},\n    \"streamName\": {}\n  },\n  \"s3Logs\": {}\n}",
			"description": " Log settings for this build that override the log settings defined in the build project. ",
			"routing": {
				"send": {
					"property": "logsConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Registry Credential Override",
			"name": "registryCredentialOverride",
			"type": "json",
			"default": "{\n  \"credentialProvider\": {}\n}",
			"description": " The credentials for access to a private registry. ",
			"routing": {
				"send": {
					"property": "registryCredentialOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Image Pull Credentials Type Override",
			"name": "imagePullCredentialsTypeOverride",
			"type": "options",
			"default": "CODEBUILD",
			"description": "<p>The type of credentials CodeBuild uses to pull images in your build. There are two valid values: </p> <dl> <dt>CODEBUILD</dt> <dd> <p>Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.</p> </dd> <dt>SERVICE_ROLE</dt> <dd> <p>Specifies that CodeBuild uses your build project's service role. </p> </dd> </dl> <p>When using a cross-account or private registry image, you must use <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image, you must use <code>CODEBUILD</code> credentials. </p>",
			"options": [
				{
					"name": "CODEBUILD",
					"value": "CODEBUILD"
				},
				{
					"name": "SERVICE ROLE",
					"value": "SERVICE_ROLE"
				}
			],
			"routing": {
				"send": {
					"property": "imagePullCredentialsTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Debug Session Enabled",
			"name": "debugSessionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies if session debugging is enabled for this build. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html\">Viewing a running build in Session Manager</a>.",
			"routing": {
				"send": {
					"property": "debugSessionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.StartBuildBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.StartBuildBatch",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Start Build Batch",
					"value": "CodeBuild_20161006.StartBuildBatch"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources Override",
			"name": "secondarySourcesOverride",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"gitCloneDepth\": {},\n    \"gitSubmodulesConfig\": {},\n    \"buildspec\": {},\n    \"auth\": {},\n    \"reportBuildStatus\": {},\n    \"buildStatusConfig\": {},\n    \"insecureSsl\": {},\n    \"sourceIdentifier\": {}\n  }\n]",
			"description": "An array of <code>ProjectSource</code> objects that override the secondary sources defined in the batch build project.",
			"routing": {
				"send": {
					"property": "secondarySourcesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources Version Override",
			"name": "secondarySourcesVersionOverride",
			"type": "json",
			"default": "[\n  {\n    \"sourceVersion\": {}\n  }\n]",
			"description": "An array of <code>ProjectSourceVersion</code> objects that override the secondary source versions in the batch build project.",
			"routing": {
				"send": {
					"property": "secondarySourcesVersionOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Source Version",
			"name": "sourceVersion",
			"type": "string",
			"default": "",
			"description": "<p>The version of the batch build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:</p> <dl> <dt>CodeCommit</dt> <dd> <p>The commit ID, branch, or Git tag to use.</p> </dd> <dt>GitHub</dt> <dd> <p>The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Bitbucket</dt> <dd> <p>The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Amazon S3</dt> <dd> <p>The version ID of the object that represents the build input ZIP file to use.</p> </dd> </dl> <p>If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
			"routing": {
				"send": {
					"property": "sourceVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Artifacts Override",
			"name": "artifactsOverride",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"path\": {},\n  \"namespaceType\": {},\n  \"name\": {},\n  \"packaging\": {},\n  \"overrideArtifactName\": {},\n  \"encryptionDisabled\": {},\n  \"artifactIdentifier\": {}\n}",
			"description": "An array of <code>ProjectArtifacts</code> objects that contains information about the build output artifact overrides for the build project.",
			"routing": {
				"send": {
					"property": "artifactsOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Artifacts Override",
			"name": "secondaryArtifactsOverride",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"path\": {},\n    \"namespaceType\": {},\n    \"name\": {},\n    \"packaging\": {},\n    \"overrideArtifactName\": {},\n    \"encryptionDisabled\": {},\n    \"artifactIdentifier\": {}\n  }\n]",
			"description": "An array of <code>ProjectArtifacts</code> objects that override the secondary artifacts defined in the batch build project.",
			"routing": {
				"send": {
					"property": "secondaryArtifactsOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Environment Variables Override",
			"name": "environmentVariablesOverride",
			"type": "json",
			"default": "[\n  {\n    \"value\": {},\n    \"type\": {}\n  }\n]",
			"description": "An array of <code>EnvironmentVariable</code> objects that override, or add to, the environment variables defined in the batch build project.",
			"routing": {
				"send": {
					"property": "environmentVariablesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Source Type Override",
			"name": "sourceTypeOverride",
			"type": "options",
			"default": "CODECOMMIT",
			"description": "The source input type that overrides the source input defined in the batch build project.",
			"options": [
				{
					"name": "CODECOMMIT",
					"value": "CODECOMMIT"
				},
				{
					"name": "CODEPIPELINE",
					"value": "CODEPIPELINE"
				},
				{
					"name": "GITHUB",
					"value": "GITHUB"
				},
				{
					"name": "S 3",
					"value": "S3"
				},
				{
					"name": "BITBUCKET",
					"value": "BITBUCKET"
				},
				{
					"name": "GITHUB ENTERPRISE",
					"value": "GITHUB_ENTERPRISE"
				},
				{
					"name": "NO SOURCE",
					"value": "NO_SOURCE"
				}
			],
			"routing": {
				"send": {
					"property": "sourceTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Source Location Override",
			"name": "sourceLocationOverride",
			"type": "string",
			"default": "",
			"description": "A location that overrides, for this batch build, the source location defined in the batch build project.",
			"routing": {
				"send": {
					"property": "sourceLocationOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Source Auth Override",
			"name": "sourceAuthOverride",
			"type": "json",
			"default": "{\n  \"resource\": {}\n}",
			"description": "A <code>SourceAuth</code> object that overrides the one defined in the batch build project. This override applies only if the build project's source is BitBucket or GitHub.",
			"routing": {
				"send": {
					"property": "sourceAuthOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Git Clone Depth Override",
			"name": "gitCloneDepthOverride",
			"type": "number",
			"default": 0,
			"description": "The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any previous depth of history defined in the batch build project.",
			"routing": {
				"send": {
					"property": "gitCloneDepthOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Git Submodules Config Override",
			"name": "gitSubmodulesConfigOverride",
			"type": "json",
			"default": "{}",
			"description": "A <code>GitSubmodulesConfig</code> object that overrides the Git submodules configuration for this batch build.",
			"routing": {
				"send": {
					"property": "gitSubmodulesConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Buildspec Override",
			"name": "buildspecOverride",
			"type": "string",
			"default": "",
			"description": "<p>A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project.</p> <p>If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage\">Buildspec File Name and Storage Location</a>. </p>",
			"routing": {
				"send": {
					"property": "buildspecOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Insecure SSL Override",
			"name": "insecureSslOverride",
			"type": "boolean",
			"default": true,
			"description": "Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.",
			"routing": {
				"send": {
					"property": "insecureSslOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Report Build Batch Status Override",
			"name": "reportBuildBatchStatusOverride",
			"type": "boolean",
			"default": true,
			"description": "<p>Set to <code>true</code> to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p> <note> <p>The status of a build triggered by a webhook is always reported to your source provider. </p> </note>",
			"routing": {
				"send": {
					"property": "reportBuildBatchStatusOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Environment Type Override",
			"name": "environmentTypeOverride",
			"type": "options",
			"default": "WINDOWS_CONTAINER",
			"description": "A container type for this batch build that overrides the one specified in the batch build project.",
			"options": [
				{
					"name": "WINDOWS CONTAINER",
					"value": "WINDOWS_CONTAINER"
				},
				{
					"name": "LINUX CONTAINER",
					"value": "LINUX_CONTAINER"
				},
				{
					"name": "LINUX GPU CONTAINER",
					"value": "LINUX_GPU_CONTAINER"
				},
				{
					"name": "ARM CONTAINER",
					"value": "ARM_CONTAINER"
				},
				{
					"name": "WINDOWS SERVER 2019 CONTAINER",
					"value": "WINDOWS_SERVER_2019_CONTAINER"
				}
			],
			"routing": {
				"send": {
					"property": "environmentTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Image Override",
			"name": "imageOverride",
			"type": "string",
			"default": "",
			"description": "The name of an image for this batch build that overrides the one specified in the batch build project.",
			"routing": {
				"send": {
					"property": "imageOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Compute Type Override",
			"name": "computeTypeOverride",
			"type": "options",
			"default": "BUILD_GENERAL1_SMALL",
			"description": "The name of a compute type for this batch build that overrides the one specified in the batch build project.",
			"options": [
				{
					"name": "BUILD GENERAL 1 SMALL",
					"value": "BUILD_GENERAL1_SMALL"
				},
				{
					"name": "BUILD GENERAL 1 MEDIUM",
					"value": "BUILD_GENERAL1_MEDIUM"
				},
				{
					"name": "BUILD GENERAL 1 LARGE",
					"value": "BUILD_GENERAL1_LARGE"
				},
				{
					"name": "BUILD GENERAL 1 2 XLARGE",
					"value": "BUILD_GENERAL1_2XLARGE"
				}
			],
			"routing": {
				"send": {
					"property": "computeTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Certificate Override",
			"name": "certificateOverride",
			"type": "string",
			"default": "",
			"description": "The name of a certificate for this batch build that overrides the one specified in the batch build project.",
			"routing": {
				"send": {
					"property": "certificateOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Cache Override",
			"name": "cacheOverride",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"modes\": {}\n}",
			"description": "A <code>ProjectCache</code> object that specifies cache overrides.",
			"routing": {
				"send": {
					"property": "cacheOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Service Role Override",
			"name": "serviceRoleOverride",
			"type": "string",
			"default": "",
			"description": "The name of a service role for this batch build that overrides the one specified in the batch build project.",
			"routing": {
				"send": {
					"property": "serviceRoleOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Privileged Mode Override",
			"name": "privilegedModeOverride",
			"type": "boolean",
			"default": true,
			"description": "Enable this flag to override privileged mode in the batch build project.",
			"routing": {
				"send": {
					"property": "privilegedModeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Build Timeout In Minutes Override",
			"name": "buildTimeoutInMinutesOverride",
			"type": "number",
			"default": 0,
			"description": "Overrides the build timeout specified in the batch build project.",
			"routing": {
				"send": {
					"property": "buildTimeoutInMinutesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Queued Timeout In Minutes Override",
			"name": "queuedTimeoutInMinutesOverride",
			"type": "number",
			"default": 0,
			"description": "The number of minutes a batch build is allowed to be queued before it times out.",
			"routing": {
				"send": {
					"property": "queuedTimeoutInMinutesOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key Override",
			"name": "encryptionKeyOverride",
			"type": "string",
			"default": "",
			"description": "<p>The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project. The CMK key encrypts the build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
			"routing": {
				"send": {
					"property": "encryptionKeyOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Logs Config Override",
			"name": "logsConfigOverride",
			"type": "json",
			"default": "{\n  \"cloudWatchLogs\": {\n    \"status\": {},\n    \"groupName\": {},\n    \"streamName\": {}\n  },\n  \"s3Logs\": {}\n}",
			"description": "A <code>LogsConfig</code> object that override the log settings defined in the batch build project.",
			"routing": {
				"send": {
					"property": "logsConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Registry Credential Override",
			"name": "registryCredentialOverride",
			"type": "json",
			"default": "{\n  \"credentialProvider\": {}\n}",
			"description": "A <code>RegistryCredential</code> object that overrides credentials for access to a private registry.",
			"routing": {
				"send": {
					"property": "registryCredentialOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Image Pull Credentials Type Override",
			"name": "imagePullCredentialsTypeOverride",
			"type": "options",
			"default": "CODEBUILD",
			"description": "<p>The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values: </p> <dl> <dt>CODEBUILD</dt> <dd> <p>Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.</p> </dd> <dt>SERVICE_ROLE</dt> <dd> <p>Specifies that CodeBuild uses your build project's service role. </p> </dd> </dl> <p>When using a cross-account or private registry image, you must use <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image, you must use <code>CODEBUILD</code> credentials. </p>",
			"options": [
				{
					"name": "CODEBUILD",
					"value": "CODEBUILD"
				},
				{
					"name": "SERVICE ROLE",
					"value": "SERVICE_ROLE"
				}
			],
			"routing": {
				"send": {
					"property": "imagePullCredentialsTypeOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Build Batch Config Override",
			"name": "buildBatchConfigOverride",
			"type": "json",
			"default": "{\n  \"combineArtifacts\": {},\n  \"restrictions\": {},\n  \"timeoutInMins\": {},\n  \"batchReportMode\": {}\n}",
			"description": "A <code>BuildBatchConfigOverride</code> object that contains batch build configuration overrides.",
			"routing": {
				"send": {
					"property": "buildBatchConfigOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Debug Session Enabled",
			"name": "debugSessionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies if session debugging is enabled for this batch build. For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html\">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.",
			"routing": {
				"send": {
					"property": "debugSessionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Build Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.StopBuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.StopBuild",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Stop Build",
					"value": "CodeBuild_20161006.StopBuild"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The ID of the build.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.StopBuildBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build Batch"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.StopBuildBatch",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Stop Build Batch",
					"value": "CodeBuild_20161006.StopBuildBatch"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build Batch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The identifier of the batch build to stop.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build Batch"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Build Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.UpdateProject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.UpdateProject",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Update Project",
					"value": "CodeBuild_20161006.UpdateProject"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "<p>The name of the build project.</p> <note> <p>You cannot change a build project's name.</p> </note>",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A new or replacement description of the build project.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"gitCloneDepth\": {},\n  \"gitSubmodulesConfig\": {},\n  \"buildspec\": {},\n  \"auth\": {},\n  \"reportBuildStatus\": {},\n  \"buildStatusConfig\": {},\n  \"insecureSsl\": {},\n  \"sourceIdentifier\": {}\n}",
			"description": "Information to be changed about the build input source code for the build project.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Sources",
			"name": "secondarySources",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"gitCloneDepth\": {},\n    \"gitSubmodulesConfig\": {},\n    \"buildspec\": {},\n    \"auth\": {},\n    \"reportBuildStatus\": {},\n    \"buildStatusConfig\": {},\n    \"insecureSsl\": {},\n    \"sourceIdentifier\": {}\n  }\n]",
			"description": " An array of <code>ProjectSource</code> objects. ",
			"routing": {
				"send": {
					"property": "secondarySources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Source Version",
			"name": "sourceVersion",
			"type": "string",
			"default": "",
			"description": "<p> A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p> For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
			"routing": {
				"send": {
					"property": "sourceVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Source Versions",
			"name": "secondarySourceVersions",
			"type": "json",
			"default": "[\n  {\n    \"sourceVersion\": {}\n  }\n]",
			"description": " An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take over these <code>secondarySourceVersions</code> (at the project level). ",
			"routing": {
				"send": {
					"property": "secondarySourceVersions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Artifacts",
			"name": "artifacts",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"path\": {},\n  \"namespaceType\": {},\n  \"name\": {},\n  \"packaging\": {},\n  \"overrideArtifactName\": {},\n  \"encryptionDisabled\": {},\n  \"artifactIdentifier\": {}\n}",
			"description": "Information to be changed about the build output artifacts for the build project.",
			"routing": {
				"send": {
					"property": "artifacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Secondary Artifacts",
			"name": "secondaryArtifacts",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"path\": {},\n    \"namespaceType\": {},\n    \"name\": {},\n    \"packaging\": {},\n    \"overrideArtifactName\": {},\n    \"encryptionDisabled\": {},\n    \"artifactIdentifier\": {}\n  }\n]",
			"description": " An array of <code>ProjectArtifact</code> objects. ",
			"routing": {
				"send": {
					"property": "secondaryArtifacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Cache",
			"name": "cache",
			"type": "json",
			"default": "{\n  \"location\": {},\n  \"modes\": {}\n}",
			"description": "Stores recently used information so that it can be quickly accessed at a later time.",
			"routing": {
				"send": {
					"property": "cache",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Environment",
			"name": "environment",
			"type": "json",
			"default": "{\n  \"image\": {},\n  \"computeType\": {},\n  \"environmentVariables\": {},\n  \"privilegedMode\": {},\n  \"certificate\": {},\n  \"registryCredential\": {},\n  \"imagePullCredentialsType\": {}\n}",
			"description": "Information to be changed about the build environment for the build project.",
			"routing": {
				"send": {
					"property": "environment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Service Role",
			"name": "serviceRole",
			"type": "string",
			"default": "",
			"description": "The replacement ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.",
			"routing": {
				"send": {
					"property": "serviceRole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Timeout In Minutes",
			"name": "timeoutInMinutes",
			"type": "number",
			"default": 0,
			"description": "The replacement value in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed.",
			"routing": {
				"send": {
					"property": "timeoutInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Queued Timeout In Minutes",
			"name": "queuedTimeoutInMinutes",
			"type": "number",
			"default": 0,
			"description": " The number of minutes a build is allowed to be queued before it times out. ",
			"routing": {
				"send": {
					"property": "queuedTimeoutInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key",
			"name": "encryptionKey",
			"type": "string",
			"default": "",
			"description": "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>). </p>",
			"routing": {
				"send": {
					"property": "encryptionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "<p>An updated list of tag key and value pairs associated with this build project.</p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.</p>",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "vpcConfig",
			"type": "json",
			"default": "{\n  \"subnets\": {},\n  \"securityGroupIds\": {}\n}",
			"description": "VpcConfig enables CodeBuild to access resources in an Amazon VPC.",
			"routing": {
				"send": {
					"property": "vpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Badge Enabled",
			"name": "badgeEnabled",
			"type": "boolean",
			"default": true,
			"description": "Set this to true to generate a publicly accessible URL for your project's build badge.",
			"routing": {
				"send": {
					"property": "badgeEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Logs Config",
			"name": "logsConfig",
			"type": "json",
			"default": "{\n  \"cloudWatchLogs\": {\n    \"status\": {},\n    \"groupName\": {},\n    \"streamName\": {}\n  },\n  \"s3Logs\": {}\n}",
			"description": " Information about logs for the build project. A project can create logs in CloudWatch Logs, logs in an S3 bucket, or both. ",
			"routing": {
				"send": {
					"property": "logsConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "File System Locations",
			"name": "fileSystemLocations",
			"type": "json",
			"default": "[\n  {\n    \"location\": {},\n    \"mountPoint\": {},\n    \"identifier\": {},\n    \"mountOptions\": {}\n  }\n]",
			"description": " An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ",
			"routing": {
				"send": {
					"property": "fileSystemLocations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Build Batch Config",
			"name": "buildBatchConfig",
			"type": "json",
			"default": "{\n  \"combineArtifacts\": {},\n  \"restrictions\": {},\n  \"timeoutInMins\": {},\n  \"batchReportMode\": {}\n}",
			"description": "Contains configuration information about a batch build project.",
			"routing": {
				"send": {
					"property": "buildBatchConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Concurrent Build Limit",
			"name": "concurrentBuildLimit",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of concurrent builds that are allowed for this project.</p> <p>New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.</p> <p>To remove this limit, set this value to -1.</p>",
			"routing": {
				"send": {
					"property": "concurrentBuildLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.UpdateProjectVisibility",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Update Project Visibility",
					"value": "CodeBuild_20161006.UpdateProjectVisibility"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Arn",
			"name": "projectArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the build project.",
			"routing": {
				"send": {
					"property": "projectArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Visibility",
			"name": "projectVisibility",
			"type": "options",
			"default": "PUBLIC_READ",
			"description": "<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>",
			"options": [
				{
					"name": "PUBLIC READ",
					"value": "PUBLIC_READ"
				},
				{
					"name": "PRIVATE",
					"value": "PRIVATE"
				}
			],
			"routing": {
				"send": {
					"property": "projectVisibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"displayName": "Resource Access Role",
			"name": "resourceAccessRole",
			"type": "string",
			"default": "",
			"description": "The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.",
			"routing": {
				"send": {
					"property": "resourceAccessRole",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Project Visibility"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.UpdateReportGroup",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Update Report Group",
					"value": "CodeBuild_20161006.UpdateReportGroup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Arn",
			"name": "arn",
			"type": "string",
			"default": "",
			"description": " The ARN of the report group to update. ",
			"routing": {
				"send": {
					"property": "arn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"displayName": "Export Config",
			"name": "exportConfig",
			"type": "json",
			"default": "{\n  \"s3Destination\": {}\n}",
			"description": "<p> Used to specify an updated export type. Valid values are: </p> <ul> <li> <p> <code>S3</code>: The report results are exported to an S3 bucket. </p> </li> <li> <p> <code>NO_EXPORT</code>: The report results are not exported. </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "exportConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "<p> An updated list of tag key and value pairs associated with this report group. </p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.</p>",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Group"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=CodeBuild_20161006.UpdateWebhook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "CodeBuild_20161006.UpdateWebhook",
			"type": "options",
			"options": [
				{
					"name": "Code Build 20161006 Update Webhook",
					"value": "CodeBuild_20161006.UpdateWebhook"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Project Name",
			"name": "projectName",
			"type": "string",
			"default": "",
			"description": "The name of the CodeBuild project.",
			"routing": {
				"send": {
					"property": "projectName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Branch Filter",
			"name": "branchFilter",
			"type": "string",
			"default": "",
			"description": "<p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p> It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>",
			"routing": {
				"send": {
					"property": "branchFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Rotate Secret",
			"name": "rotateSecret",
			"type": "boolean",
			"default": true,
			"description": " A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. ",
			"routing": {
				"send": {
					"property": "rotateSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Filter Groups",
			"name": "filterGroups",
			"type": "json",
			"default": "[\n  [\n    {\n      \"pattern\": {},\n      \"excludeMatchedPattern\": {}\n    }\n  ]\n]",
			"description": " An array of arrays of <code>WebhookFilter</code> objects used to determine if a webhook event can trigger a build. A filter group must contain at least one <code>EVENT</code> <code>WebhookFilter</code>. ",
			"routing": {
				"send": {
					"property": "filterGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Build Type",
			"name": "buildType",
			"type": "options",
			"default": "BUILD",
			"description": "Specifies the type of build this webhook will trigger.",
			"options": [
				{
					"name": "BUILD",
					"value": "BUILD"
				},
				{
					"name": "BUILD BATCH",
					"value": "BUILD_BATCH"
				}
			],
			"routing": {
				"send": {
					"property": "buildType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Webhook"
					]
				}
			}
		},
];
