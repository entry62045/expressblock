async function LoadExpressBlock() {
	await import('https://raw.githack.com/entry62045/expressblock/main/block.js');
	if(Entry.getMainWS() && Entry.projectId) {
		const gumyul_exportedProject = Entry.exportProject()
		const projectData = await (await fetch(`https://playentry.org/api/project/${Entry.projectId}`)).json()
		Entry.clearProject()
		Entry.loadProject(Object.keys(gumyul_exportedProject).reduce((acc, cur) => {
			acc[cur] = projectData[cur]
			return acc
		}, {}))
	}
}
LoadExpressBlock();