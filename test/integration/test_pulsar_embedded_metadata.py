"""Integration tests for the Pulsar embedded runner with remote metadata."""

import os

from base import integration_util

SCRIPT_DIRECTORY = os.path.abspath(os.path.dirname(__file__))
EMBEDDED_PULSAR_JOB_CONFIG_FILE = os.path.join(SCRIPT_DIRECTORY, "embedded_pulsar_metadata_job_conf.yml")


class EmbeddedMetadataPulsarIntegrationInstance(integration_util.IntegrationInstance):
    """Describe a Galaxy test instance with embedded pulsar configured."""

    framework_tool_and_types = True

    @classmethod
    def handle_galaxy_config_kwds(cls, config):
        config["job_config_file"] = EMBEDDED_PULSAR_JOB_CONFIG_FILE


instance = integration_util.integration_module_instance(EmbeddedMetadataPulsarIntegrationInstance)

test_tools = integration_util.integration_tool_runner(["simple_constructs"])
