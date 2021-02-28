import yaml
import os
import sys
import ruamel.yaml
import wget

remote_yaml_file_url = sys.argv[1]
remote_yaml_file = "remote_config.yaml"
# download yaml file
os.system("wget {0} -O {1}".format(remote_yaml_file_url, remote_yaml_file))

yaml_file = open(remote_yaml_file, 'rb')
data = yaml_file.read()
yaml_file.close()
# read yaml file
remote_yaml = yaml.load(data, Loader = yaml.FullLoader)

out_yaml = ruamel.yaml.YAML()
out_yaml.indent(mapping=2, sequence=4, offset=2)
out_yaml.boolean_representation = ['false', 'true']

# Get Proxies from yaml file
cur_path = os.getcwd()
proxy_file = open(cur_path + "/proxies.yaml", 'w', encoding='utf-8')
proxies = {"proxies" : remote_yaml['proxies']}
out_yaml.dump(proxies, proxy_file)
proxy_file.close()

