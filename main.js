lucide.createIcons();
dayjs.locale("pt-br");

document.addEventListener("alpine:init", () => {
	Alpine.data("data", function () {
		return {
			location: "New York, Estados Unidos",
			activity: "",
			date: new Date().toJSON().slice(0, 10),
			hour: "06:00",
			activities: this.$persist([]),

			submit() {
				this.activities.push({
					done: false,
					name: this.activity,
					date: this.date,
					hour: this.hour,
				});
			},
		};
	});
});
