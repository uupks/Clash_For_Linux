# Clash For Linux

## Prerequisite
1. Python3 with `yaml` `ruamel` `wget`
2. Clash Premium Release

## How to use
1. Download [Clash Premium Release](https://github.com/Dreamacro/clash/releases/tag/premium)
2. `Python3 update_proxies.py [Subscribe link]`
   
   It will generate a `proxies.yaml` from your `Subscribe link`.
3. `sudo ./Clash -d .`

4. you can add your rules to `my_direct_rules.yaml` and `my_proxy_rules.yaml` for DIRECT and PROXY