import csv
import os

import flet as ft

DATA_FILE = "data.csv"


# Load tasks from CSV file
def load_task() -> list:
    if not os.path.exists(DATA_FILE):
        return []

    with open(DATA_FILE, mode="r", newline="") as file:
        reader = csv.reader(file)
        return [row[0] for row in reader if row]  # Check notes


# Save tasks to CSV file
def save_task(tasks: list) -> None:
    with open(DATA_FILE, mode="w", newline="") as file:
        writer = csv.writer(file)
        for task in tasks:
            writer.writerow([task])


def main(page: ft.Page):
    """Flet Application for a simple task manager."""

    page.title = "Task Manager"
    page.window.width = 400
    page.window.height = 600
    page.theme_mode = ft.ThemeMode.DARK

    # Page Methods

    def delete_task(event, text_task: str, item_row: ft.Row) -> None:
        tasks = load_task()  # Load existing tasks

        if text_task in tasks:
            tasks.remove(text_task)  # Remove the task from the list

        task_list.controls.remove(item_row)  # Remove the task from the UI

        save_task(tasks)  # Save updated tasks to CSV
        page.update()  # Update the UI

    def render_tasks(str: str) -> ft.Row:
        row = ft.Row()  # Create a new row for each task
        row.controls = [
            ft.Text(str, expand=True),
            ft.IconButton(
                ft.Icons.DELETE,
                icon_color=ft.Colors.RED,
                on_click=lambda event: delete_task(event, str, row),
            ),
        ]  # Add the task text and delete button to the row
        return row

    def add_task(event) -> None:
        if task_input.value:
            value = task_input.value.strip()

            tasks = load_task()  # Load existing tasks
            tasks.append(value)  # Add new task to the list
            save_task(tasks)  # Save updated tasks to CSV

            # Update the UI with the new task
            task_list.controls.append(render_tasks(value))
            task_input.value = ""
            page.update()

    # UI Elements

    # Task List: A vertical list to display tasks
    task_list = ft.ListView(expand=True, spacing=10, padding=20)
    # Task Input: A text field to enter new tasks
    task_input = ft.TextField(label="New Task", expand=True)
    # Add Button: A button to add the new task to the list
    add_button = ft.FloatingActionButton(icon=ft.Icons.ADD, on_click=add_task)

    # Initializing App: Load existing tasks and render them in the UI
    for task in load_task():
        task_list.controls.append(render_tasks(task))

    # Main Layout: A vertical column to hold the title, input row, and task list
    page.add(
        ft.Text("My Tasks", size=24, weight=ft.FontWeight.BOLD),
        ft.Row([task_input, add_button], spacing=10),
        ft.Divider(),
        task_list,
    )


if __name__ == "__main__":
    ft.run(main)


# Note about the For Loop:
# The single-line For Loop is equivalent to:
# tasks = []
# for row in reader:
#     if row:
#         tasks.append(row[0])
