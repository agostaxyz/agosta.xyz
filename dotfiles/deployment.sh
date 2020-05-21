mkdir git_workspace
sudo xbps-install -Suy git
git clone https://github.com/Coldsaga/dotfiles.git git_workspace/dotfiles
sh git_workspace/dotfiles/deployment.sh
