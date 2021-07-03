https://github.com/carmstrong/multinode-glusterfs-vagrant

https://www.exxactcorp.com/blog/HPC/building-a-kubernetes-cluster-using-vagrant

 vagrant up
 
vagrant destroy

vagrant box remove .

export VAGRANT_HOME=/media/plantsense/vms

vagrant package --output vagrant-ubuntu-20-base.box --base ubuntu-base

vagrant box add  vagrant-ubuntu-20-base vagrant-ubuntu-20-base.box

unset VAGRANT_HOME