# Bulk Data Upload Plugin

Wraps the bulk upload plugin in an iframe in a plugin!

## Quick Build

### Prerequisites

The build uses node 6.x. You may install node directly or use nvm to install and select the appropriate node version. At the time of writing, the "lts" options are the easiest way to get the correct node version

### Instructions

#### To change the plugin outer structure

The configuration and modules are managed just like a normal kbase-ui plugin. Just edit the files in place. If you are developing and testing locally with kbase-ui, you should install this repo and kbase-ui as siblings, and then link this plugin live into kbase-ui. See the kbase-ui instructions for this procedure.

#### To change the core plugin

- clone this repo
- cd into src/plugin/iframe_root
- to prepare for edit/compile:
  - npm install
- change the appropriate typescript (ts) files
- compile the distribution with "gulp dist"
- this places the runtime files into src/plugin/iframe_root/dist


#### Which node?

Requires node 6.

On Mac, use nvm: https://github.com/creationix/nvm

